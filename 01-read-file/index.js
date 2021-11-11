const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'text.txt');
const readable = fs.createReadStream(filePath);

readable.on('data', chunk => console.log(chunk.toString()));
