const fs = require('fs');

let txt = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit!';

// Writing file async'ly 
fs.writeFile('dummy.txt', txt, (err) => { // only error is available as arg
  console.log(err);
  if(!err){
    console.log('File written successfully!');
  }
});

console.log('Program Ended');
