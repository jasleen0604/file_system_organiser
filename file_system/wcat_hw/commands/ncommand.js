let fs=require('fs');

//npm install line-reader --save
let lineReader = require('line-reader');

function ncommand(filepath)
{
    let i=1;
    lineReader.eachLine(filepath, (line, last) => {
        console.log(i,line);  
        i++; 
    });
    
}
module.exports={
    ncommandfn: ncommand
};