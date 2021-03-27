let fs = require("fs");
let path = require("path");

function view(dirpath, mode) {
    if (mode == "tree") {
        // console.log("Tree is working")
        viewTree(dirpath, "");
    } else if (mode == "flat") {
        viewFlat(dirpath);
        // console.log("Flat is working")
    } else {
        console.log("Wrong mode");
    }
}
function isFileChecker(dirPath)  
{
    return fs.lstatSync(dirPath).isFile();
}
function readContent(dirPath)  
{
    return fs.readdirSync(dirPath);
}

function viewTree(dirPath, indent)
{
    let isFile = isFileChecker(dirPath);
    if(isFile == true)  
    {
        console.log(indent,path.basename(dirPath) + "*"); //basename extracts the folder/file name from path.
    }
    else    //for directories
    {
        console.log(indent,path.basename(dirPath));    

        let children = readContent(dirPath);
        for(let i=0;i<children.length;i++)
        viewTree(path.join(dirPath,children[i]), indent+"\t"); //join is used to join the path with /(slash)
    }

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

module.exports={
    viewFn:view
};
