let arr=[    // collection of any type of data. there is no array in js. object is emulated as an array
    1,
    1.1,
    "string",
    null,
    true,
    {
        name: "jasleen",
        lastname: "kaur"
    },
    [1,2,3,4,5,6],
    function sayhi(){
        console.log("hello");
        return "hello";
    }
];
//--------------------get------------------------
console.log(arr);
console.log("value at idx 3", arr[3]);
console.log("value at idx 5", arr[5].name);
console.log("value at idx 7", arr[7]()); // this will print hello twice. once due the function console, 2nd time due to returned "hello" from the function.
// sayhi(); // can't call this way since the fnc is an element of the array
console.log("---------------------------------------");

//---------------------loop----------------------
for(let i=0;i< arr.length;i++)
{
    console.log(i, " : ", arr[i]);
}
console.log("---------------------------------------");

//--------------------update----------------------
arr[3]="value";

for(key in arr)
{
console.log(arr[key]);
}
arr[95]="95th val";
console.log("at index 45: ", arr[45]); // will give undefined, not error.
console.log("---------------------------------------");

arr["invalid1"]="some val"; // invalid1 to invalid6 keys will be formed and they will be assigned the value "some val". this shows the object nature of array.
arr["invalid2"]="some val";
arr["invalid3"]="some val";
arr["invalid4"]="some val";
arr["invalid5"]="some val";
arr["invalid6"]="some val";
arr[15]="15th val"; // assigning value at 15th index
console.log(arr);
console.log("Length of array: ", arr.length);
const a=10;
console.log("---------------------------------------");

arr.pop(); //remove last. will remove the value at last index i.e. index 95.
arr.push("new value at index 95"); //add last. will add new value at 95th index.
console.log(arr);
console.log("---------------------------------------");

// add first --> unshift function
// remove first --> shift function

let sliced= arr.slice(2,4); // stores copy of the sliced array
console.log("sliced array: ", sliced);
console.log("actual array: ", arr);
console.log("---------------------------------------");


let removedEntries= arr.splice(2,2);// modifies the original array
console.log("modified original array after splicing:", arr);
console.log("spliced portion of the array:", removedEntries);
console.log("---------------------------------------");

let string = "this is a string to be searched"; // splits the string into words
let strArr= string.split(" "); // splits the string into words whenever a space is encountered
let joinedStr= strArr.join("+"); // will join the split string using '+' sign
console.log(strArr);
console.log(joinedStr);
