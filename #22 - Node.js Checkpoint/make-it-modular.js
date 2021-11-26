
let filtred = require('./mymodule.js');



filtred(process.argv[2],process.argv[3],function(err, files){
    for(element of files){
        console.log(element);
    }
});