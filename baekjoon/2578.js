let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const bingoTable = [];
const indexTable = [];
for(let i=0; i<5; i++) {
  let arr = input[i].split(' ').map((v) => Number(v.trim()));
  bingoTable.push(arr);
  for(let j=0; j<arr.length; j++) {
    indexTable[arr[j]] = [i, j];
  }
}

function checkBingo() {
  let count = 0;
  let bingo = 0;
  for(let i=5; i<input.length; i++) {
    let arr = input[i].split(' ').map((v) => Number(v.trim()));
    for(let j=0; j<5; j++) {
      count++;
      let index = indexTable[arr[j]];
      bingoTable[index[0]][index[1]] = 0;
      bingo += checkRow(index[0]);
      bingo += checkCol(index[1]);
      if(bingo + checkDiagonal() >= 3) {
        return count;
      }
    }
  }
  return 0;
}

function checkRow(index) {
  for(let i=0; i<5; i++) {
    if(bingoTable[index][i] !== 0) {
      return 0;
    }
  }
  return 1;
}

function checkCol(index) {
  for(let i=0; i<5; i++) {
    if(bingoTable[i][index] !== 0) {
      return 0;
    }
  }
  return 1;
}

function checkDiagonal() {
  let left = 1;
  let right = 1;
  for(let i=0; i<5; i++) {
    if(bingoTable[i][i] !== 0) {
      left = 0;
    }
    if(bingoTable[i][4-i] !== 0) {
      right = 0;
    }
  }
  return left + right;
}

result = checkBingo();
console.log(result);