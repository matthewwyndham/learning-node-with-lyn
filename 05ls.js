var fs = require('fs');

var directory = process.argv[2];
var extension = process.argv[3];

fs.readdir(directory, function (err, list){
    if (err) {
        return callback(err);
    } 
    else {
        for (e of list) {
            if (e.indexOf(".") > -1 && e.split('.').pop() === extension) console.log(e);
        }
    }
});
 
