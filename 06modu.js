var checkExt = require('./checkExt.js');

var directory = process.argv[2];
var extension = process.argv[3];

checkExt(directory, extension,(e,d)=>{
    if (e) {
        console.log(e);
    } 
    else {
        for (let line of d) console.log(line);
    }
});