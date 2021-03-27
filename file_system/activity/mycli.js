
// node mycli.js view <dirname> tree
// node mycli.js view <dirname> flat
// node mycli.js organize <dirname> 
// node mycli.js help

let helpFnObj =require("./commands/help");    // require is fnc to import something from some other file.
let organizeFnObj =require("./commands/organize");
let viewfnObj=require("./commands/view");

let input=process.argv.slice(2);   // slicing to get the command name present at index 2
let cmd=input[0];   //storing the command name 

switch(cmd)
{
    case "view":
        viewfnObj.viewFn(input[1], input[2]);
        break;

    case "organize":
        organizeFnObj.OrganizeFn(input[1]);
        break;

    case "help":
        helpFnObj.helpFn();
        break;

    default:
        console.log("wrong command. Enter help to see the list of all commands");
}