const path = require('path');

const fileName = __filename; 
console.log(fileName); // file name will be with directory and extension

const extn = path.extname(fileName); // prints only the extension
console.log(extn); 

const baseName = path.basename(fileName);
console.log(baseName); // prints only the filename with extn
