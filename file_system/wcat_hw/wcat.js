//node wcat.js filepath => displays content of the file in the terminal 
//node wcat.js filepath1 filepath2 filepath3... => displays content of all files in the terminal(concatinated form) in the given order.
//node wcat.js -s filepath => convert big line breaks into a singular line break
//node wcat.js -n filepath => give numbering to all the lines 
//node wcat.js -b filepath => give numbering to non-empty lines

var fs = require('fs');

let displayFnObj =require("./commands/display");    // require is fnc to import something from some other file.
let concatfnObj =require("./commands/concat");
let scommandfnObj=require("./commands/scommand");
let ncommandfnObj=require("./commands/ncommand");
let bcommandfnObj=require("./commands/bcommand");

let input=process.argv.slice(2);   // slicing to get the command name present at index 2 

if(input[0].charAt(0)==='-')
{
    switch(input[0])
    {
        case "-s":
            scommandfnObj.scommandfn(input[1]);
            break;

        case "-n":
            ncommandfnObj.ncommandfn(input[1]);
            break;

        case "-b":
            bcommandfnObj.bcommandfn(input[1]);
            break;
    
        default:
            console.log("Wrong Command");
    }
}
else{
    var stats = fs.statSync(input[0]); 
    if(stats.isFile())
    {
        if(input.length == 1) //only one file path found --> execute display command
        displayFnObj.displayfn(input[0]);

        else   //more than one file paths found --> execute concatenation command
        { 
        concatfnObj.concatfn(input);
        }
    }
}
