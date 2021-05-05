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

  async function updateFolder(folderPath) {
    const files = fs.readdirSync(folderPath);

    for (const file in files) {
      const fullFilePath = folderPath + '/' + file
      try {
        if (fs.lstatSync(fullFilePath).isDirectory()) {
          await updateFolder(fullFilePath)
        } else {
          await updateGistFile(fullFilePath, file)
        }
      } catch (error) {
        console.log(error)
      }
    }
  };

  function updateGistFile(filePath, docName) {
    const [fileName, gistId, fileType] = docName.split('.');
    const fileContent = fs.readFileSync(filePath, 'utf8')
    return gh.getGist(gistId).update({
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
