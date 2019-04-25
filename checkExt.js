var fs = require('fs');

// var directory = process.argv[2];
// var extension = process.argv[3];

module.exports = function checkExt(directory, extension, callback) {
    fs.readdir(directory, function (err, list){
        if (err) {
            return callback(err);
        } 
        else {
            var results = [];
            for (let e of list) {
                if (e.indexOf(".") > -1 && e.split('.').pop() === extension) results.push(e);
            }
            callback(false, results);
        }
    });
}
 
