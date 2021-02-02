const fs = require('fs');

let txt = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit!';

// Writing file async'ly 
fs.writeFile('dummy1.txt', txt, (err) => { // only error is available as arg
  if(!err){
    console.log('Writing over! Reading Started!');
    fs.readFile('dummy1.txt', (_err, data)=> {
      if(!_err){
        console.log(data.toString());
      }else{
        console.log(_err);
      }
    });
  }else{
    console.log(err);
  }
});

console.log('Program Ended');
