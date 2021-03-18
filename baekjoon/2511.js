let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const deckA = input[0].split(' ').map((v) => Number(v.trim()));
const deckB = input[1].split(' ').map((v) => Number(v.trim()));

let winA = 0;
let winB = 0;
let lastWin = 'D';
for(let i=0; i<10; i++) {
  if(deckA[i] > deckB[i]) {
    winA += 3;
    lastWin = 'A';
  } else if(deckA[i] < deckB[i]) {
    winB += 3;
    lastWin = 'B';
  } else {
    winA++;
    winB++;
  }
}

let result = '' + winA + ' ' + winB + "\n";
if(winA > winB) {
  result += "A";
} else if(winA < winB) {
  result += "B";
} else {
  result += lastWin;
}

console.log(result);