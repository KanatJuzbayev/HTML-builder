const fs = require('fs');
const path = require('path');


fs.readdir(path.join(__dirname, 'styles'), (error, files) => {
  fs.stat(path.join(__dirname, 'project-dist', 'bundle.css'), (error, stat) => {
    if (stat) {
      fs.unlink(path.join(__dirname, 'project-dist', 'bundle.css'),() => {});
    }
  });
  files.forEach(file => {
    if (path.extname(file) === '.css') {
      fs.readFile(path.join(__dirname, 'styles', file), (error, data) => {
        fs.writeFile(path.join(__dirname, 'project-dist', 'bundle.css'), data.toString(), {flag: 'a'}, () => {});
      });
    }
  });
});
