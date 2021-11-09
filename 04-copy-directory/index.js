const fs = require('fs');
const path = require('path');

function createDirectory(folderName) {
  fs.mkdir(path.join(__dirname, folderName), (err) => {
    if (err) {
      return console.error(`'${folderName}'` + ' - Directory already exists');
    }
    console.log(`'${folderName}'` + ' - Directory created successfully!');
  });
}

createDirectory('files-copy');

function getFilesInfo(foldName) {
  fs.readdir(path.join(__dirname, foldName), { withFileTypes: true }, (err, files) => {
    if (err) {
      console.log(err);
    } else {
      files.forEach(file => {
        fs.copyFile(`04-copy-directory/files/${file.name}`, `04-copy-directory/files-copy/${file.name}`, (err) => {
          if (err) {
            console.log('Error Found:', err);
          }  else {
            console.log(file.name + ': File copied');
          }
        });
      });
    }
  });
}

getFilesInfo('files');
