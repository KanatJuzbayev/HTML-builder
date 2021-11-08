const fs = require('fs');
const path = require('path');

fs.readFile(
  path.join(__dirname, 'text.txt'),
  // (__dirname + '/text.txt'),
  'utf-8',
  (error, data) => {
    if (error) throw error;
    console.log('\nText: ' + data);
  }
);


console.log('Приветствую! Можете потянуть с проверкой до четверга или на сколько получится?\nТолько три задания сделал, хочу доделать остальное.\nБуду очень благодарен :)');
