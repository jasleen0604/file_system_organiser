function helpExecutor()
{
    console.log(`List of all the commands: 
    1. view <dir-name> --tree
    2. view <dir-name> --flat
    3. organize <dir-name>/_
    4. help`
    ); // using ` (back tick) to print on multiple lines. it can't be done using inverted commas.
};
module.exports={      // fnc to export any variable outside of this file. to be accessible for other files.
    helpFn:helpExecutor
};