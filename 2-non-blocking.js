const fs = require('fs');

// reading file async'ly 
// only after the file reading is over, will exec the callback fn
fs.readFile('sample.txt', function(err, data){
  
  if(!err){
    console.log(data.toString());
  }else{
    console.log(err);
  }
  
});

// while the file is being read the following lines will be executed
console.log('Program Ended');