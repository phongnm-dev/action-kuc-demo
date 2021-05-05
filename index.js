const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs');
const GitHubApi = require('github-api');

try {
  const directoryPath = core.getInput('doc-folder');
  const gh = new GitHubApi({
    username: core.getInput('gist-username'),
    token: core.getInput('gist-token')
  });

  function updateFolder(folderPath) {
    const files = fs.readdirSync(folderPath);

    files.forEach((file) => {
      if (fs.lstatSync(folderPath + '/' + file).isDirectory()) {
        updateFolder(folderPath + '/' + file)
      } else {
        updateGistFile(folderPath + '/' + file, file)
      }
    })
  };

  function updateGistFile(filePath, docName) {
    const [fileName, gistId, fileType] = docName.split('.');
    const fileContent = fs.readFileSync(filePath, 'utf8')
    gh.getGist(gistId).update({
      files: {
        [fileName+'.'+fileType]: {
          content: fileContent
        }
      }
    })
  }
  
  updateFolder(directoryPath)
} catch (error) {
  core.setFailed(error.message);
}
