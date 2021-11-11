const fs = require('fs');
const path = require('path');
console.log('Enter any texts:');

fs.createWriteStream(path.join(__dirname, 'text.txt'));

process.stdin.on('data', data => {
  fs.writeFile(
    path.join(__dirname, 'text.txt'),
    data,
    { flag: 'a+' },
    err => {
      if (err) {
        console.error(err);
        return;
      }
    //file written successfully
    });

  console.log(`Added: ${data.toString()}`);
  console.log('To exit press "ctrl + C"');
});

process.on('SIGINT', () => {
  console.log('Exit. Goodbye, my friend! ;)');
  process.exit();
});
