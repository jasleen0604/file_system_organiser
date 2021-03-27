let fs=require('fs');

//npm install line-reader --save
let lineReader = require('line-reader');

function bcommand(filepath)
{
    let i=0;
    lineReader.eachLine(filepath, (line, last) => {
        if(line.length!=0){
            i++;
            console.log(i,line);  
        }
        else
        console.log(line);   
    });
    
}
module.exports={
    bcommandfn: bcommand
};