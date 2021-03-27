//file system --> nodejs module

let fs =require("fs"); // importing fs module from nodejs
let path= require("path"); // importing join module 

function isFileChecker(dirPath)    // checks if the path refers to a file and returns boolean value
{
    return fs.lstatSync(dirPath).isFile();
}
function readContent(dirPath)     // returns sub folders/files of the directory passed as argument
{
    return fs.readdirSync(dirPath);
}

function viewFlat(dirPath)
{
    let isFile = isFileChecker(dirPath);
    if(isFile == true)     // if it is file, simply print its path and exit
    {
        console.log(dirPath + "*");
    }
    else    //for directories
    {
        console.log(dirPath);     //print path of the directory

        let children = readContent(dirPath); // get the sub folders/files of the directory and loop through them to print their respective paths.
        for(let i=0;i<children.length;i++)
        viewFlat(path.join(dirPath,children[i]));
    }
}
viewFlat("C:\\Users\\hp\\Desktop\\development\\file_system");