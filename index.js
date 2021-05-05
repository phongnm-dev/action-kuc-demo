const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs');

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
  fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach(function (file) {
      if (lstatSync(file).isDirectory()) {
        fs.readdir(file, (err, docs) => {
          console.log(docs.length)
        })
      }
    });
  });
} catch (error) {
  core.setFailed(error.message);
}
