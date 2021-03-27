let fs= require('fs');

function display(filepath)
{
    fs.readFile(filepath, 'utf8', function(err, data){ 
      
        // Display the file content 
        console.log(data); 
    });  
}
module.exports={
    displayfn: display
};