const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs');
const GitHubApi = require('github-api');

// unauthenticated client
const gh = new GitHubApi({
  username: core.getInput('gist-username'),
  token: core.getInput('gist-token')
});

try {
  // // `who-to-greet` input defined in action metadata file
  // const nameToGreet = core.getInput('who-to-greet');
  // console.log(`Hello ${nameToGreet}!`);
  // const time = (new Date()).toTimeString();
  // core.setOutput("time", time);
  // // Get the JSON webhook payload for the event that triggered the workflow
  // const payload = JSON.stringify(github.context.payload, undefined, 2)
  // console.log(`The event payload: ${payload}`);
  
  const directoryPath = github.workspace + '/' + core.getInput('doc-folder');

  // const directoryPath = './sample_docs';

  fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach(function (file) {
      if (fs.lstatSync(directoryPath + '/' + file).isDirectory()) {
        fs.readdir(directoryPath + '/' + file, (err, docs) => {
          docs.forEach((docPath) => {
            const [fileName, gistId, ] = docPath.split('.');
            const fileContent = fs.readFileSync(directoryPath + '/' + file + '/' + docs, 'utf8')
            gh.getGist(gistId).update({
              files: {
                [fileName+'.'+fileType]: {
                  content: fileContent
                }
              }
            })
          })
        })
      }
    });
  });
} catch (error) {
  // core.setFailed(error.message);
}
