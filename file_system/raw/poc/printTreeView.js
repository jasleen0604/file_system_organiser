let fs =require("fs"); // importing fs module from nodejs
let path=require("path"); //importing path module

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
viewTree("C:\\Users\\hp\\Desktop\\development\\file_system","");