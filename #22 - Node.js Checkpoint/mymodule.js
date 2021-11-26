
const fs = require('fs');

function filteredLs(dir, ext, callback){


    fs.readdir(dir,(err,files)=>{
        if(err) callback(err, null);
        else{

            let arrOfFiltredFile=[];
            files.forEach(function(file){
                let fileName = file.split(".");
            
                if( (fileName.length > 1) && (fileName[fileName.length-1] === ext) )
                arrOfFiltredFile.push(file);
            
                });
                callback(null,arrOfFiltredFile);
        }

        });

}


module.exports = filteredLs;