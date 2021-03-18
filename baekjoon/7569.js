let fs = require('fs');
let input = fs.readFileSync('test').toString().split('\n');

let firstLine = input[0].split(' ');
const row = Number(firstLine[0]);
const col = Number(firstLine[1]);
const height = Number(firstLine[2]);

