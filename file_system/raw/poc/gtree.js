let root = {
    name: "d10",
    children: [
        {
            name: "d20",
            children: [
            {
                name: "d50",
                children: []
            }, 
            {
                name: "d60",
                children: []
            }]
        }, 
        {
            name: "d30",
            children: [
                {
                name: "d70",
                children: []
            }, 
            {
                name: "d80",
                children: [
                    {
                    name: "d110",
                    children: []
                }]
            }, 
            {
                name: "d90",
                children: []

            }]
        }, {
            name: "d40",
            children: []
        }]
}
// tree printing
function printgtree(node)
{
    let menmyfamily= node.name + "-->";
    for(let i=0;i<node.children.length;i++)
    {
        menmyfamily+= node.children[i].name + ",";
    }
    console.log(menmyfamily);
    for(let i=0; i<node.children.length; i++)
    {
        printgtree(node.children[i]);
    }
}
printgtree(root);
