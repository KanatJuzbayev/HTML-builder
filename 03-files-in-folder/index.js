const fs = require('fs');
const path = require('path');


function getFilesInfo(foldName) {
  fs.readdir(path.join(__dirname, foldName), { withFileTypes: true }, (err, files) => {
    console.log('-\n' + `"${foldName}" directory files:`);
    if (err) {
      console.log(err);
    } else {
      files.forEach(file => {
        fs.stat(path.join(__dirname, `secret-folder/${file.name}`), (err, stats) => {
          if (err) {
            console.log(`${file.name}: This folder is empty, or there is no such file or directory`);
          } else {
            if (stats.isFile()) {
              console.log(
                (file.name.split('.').shift() + ' - ' +
                file.name.split('.').pop() + ' - ' +
                stats.size + 'b'));
            } else {
              getFilesInfo('secret-folder/image.jpg');
            }
          }
        });
      });
    }
  });
}

getFilesInfo('secret-folder');
