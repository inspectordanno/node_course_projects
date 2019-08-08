const fs = require('fs');

for (let i = 0; i < 100; i++) {
  if (i % 15 === 0) {
    console.log(i + ' is divisible by 15');
  } else if (i % 5 === 0) {
    console.log(i +' is divisible by 5');
  } else if (i % 3 === 0) {
    console.log(i + ' is divisible by 3');
  }
};

//fs.writeFileSync('notes.txt', 'My name is Dan!');