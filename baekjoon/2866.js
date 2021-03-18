let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const firstLine = input[0].split(' ').map((v) => Number(v.trim()));

const row = Number(firstLine[0]);
const col = Number(firstLine[1]);

let count = 0;
let duplication = false;

let set = new Set();

function checkDuplication() {
  if(set.size !== col) {
    duplication = true;
  } else {
    count++;
  }
}

for(let i=0; i<col; i++) {
  let cutString = '';
  for(let j=2; j<=row; j++) {
    const str = input[j];
    cutString += str[i];
  }
  set.add(cutString);
}

checkDuplication();

while(!duplication) {
  set = new Set([...set].map(v => v.slice(1)));
  checkDuplication();
}

console.log(count);