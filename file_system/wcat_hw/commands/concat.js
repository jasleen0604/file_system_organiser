let fs= require('fs');

function concat(arr)
{
    for(let i=0; i<arr.length; i++)
    {
        let filepath=arr[i];
        var stats = fs.statSync(filepath); 
        if(stats.isFile())
        {
            fs.readFile(filepath, 'utf8', function(err, data){ 
      
                // Display the file content 
                console.log(data); 
            }); 
        }
         else
         {
             console.log("file does not exist");
         }
    }
    
}
module.exports={
    concatfn: concat
};