let fs = require('fs');
let input = fs.readFileSync('test').toString().split('\n');

let firstLine = input[0].split(' ');
const col = Number(firstLine[0]);
const row = Number(firstLine[1]);

let secondLine = input[1].split(' ');

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

const cleaner = {
  location: [Number(secondLine[0]), Number(secondLine[1])],
  direction: Number(secondLine[2]),
  goFront: function() {
    this.location = [this.location[0]+dx[this.direction], this.location[1]+dy[this.direction]]
  },
  goBack: function() {
    this.location = [this.location[0]-dx[this.direction], this.location[1]-dy[this.direction]]
  },
  turnLeft: function() {
    this.direction = this.direction === 0 ? 3 : this.direction - 1;
  },
  checkBack: function() {
    if(room[this.location[0]-dx[this.direction]][this.location[1]-dy[this.direction]] !== 1) {
      return true;
    } else {
      return false;
    }
  },
  checkLeft: function() {
    leftDirection = this.direction === 0 ? 3 : this.direction - 1;
    if(room[this.location[0]+dx[leftDirection]][this.location[1]+dy[leftDirection]] === 0) {
      return true;
    } else {
      return false;
    }
  }
}

const room = [];
for(let i=2; i<input.length; i++) {
  let arr = input[i].split(' ').map((v) => Number(v.trim()));
  room.push(arr);
}
console.log(room);
function checkAllDirection() {
  console.log(room[cleaner.location[0]+1][cleaner.location[1]], room[cleaner.location[0]-1][cleaner.location[1]], room[cleaner.location[0]][cleaner.location[1]+1], room[cleaner.location[0]][cleaner.location[1]-1]);
  if(room[cleaner.location[0]+1][cleaner.location[1]] !== 0 &&
     room[cleaner.location[0]-1][cleaner.location[1]] !== 0 &&
     room[cleaner.location[0]][cleaner.location[1]+1] !== 0 && 
     room[cleaner.location[0]][cleaner.location[1]-1] !== 0) {
      return true;
  }
}

let cleanNumber = 0;
function moveCleaner() {
  let loc = cleaner.location;
  if(room[loc[0]][loc[1]] === 0) {
    room[loc[0]][loc[1]] = 2;
    cleanNumber++;
  }
  console.log('cleanNum : ', cleanNumber);
  if(checkAllDirection()) {
    console.log('!');
    if(!cleaner.checkBack()) {
      return cleanNumber;
    } else {
      cleaner.goBack();
      moveCleaner();
    }
  } else {
    console.log('!!');
    if(cleaner.checkLeft()) {
      console.log('!!!');
      cleaner.turnLeft();
      cleaner.goFront();
      moveCleaner();
    } else {
      cleaner.turnLeft();
      console.log('!!!!');
      moveCleaner();
    }
  }
}

const result = moveCleaner();
console.log(result);