const fs = require('fs'); //importing file system module

// file reading is synchorous
let data = fs.readFileSync('sample.txt'); // blocking till the file is read completely

// only after the whole file is read the following lines will be printed
console.log(data.toString());

// will be last line
console.log('Program Ended');