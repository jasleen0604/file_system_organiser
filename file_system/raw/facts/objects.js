let obj={
    name: "Jasleen",
    lastName: "Kaur", //property
    address: {
        state: "Uttar Pradesh",
        city: "Lucknow",
    },
    isAvenger: false,
    age: 19,
    movies: ["civil war", "first avenger", "age of ultrons"],
    sayhi: function(param){     //methods
        console.log("cap says hi", param);
        return "return blessings";
    }
}

// -----------------loop-------------------
for(let itr in obj)
{
    console.log("key: ", itr, "value: ", obj[itr]);
    console.log("key: ", itr, "value: ", obj.itr); //itr is not a member of obj object so it will print undefined
}
console.log("-------------------------------------------------------------------");

//-----------------get----------------------
let key="address";
console.log("address object:", obj[key]);
console.log("address object:", obj.address);
console.log("address object:", obj.address.state);
console.log("Movie:", obj.movies[1]);
console.log("function is inside an object", obj.sayhi("Jasleen"));
console.log("-------------------------------------------------------------------");


//-----------------set/update-----------------
obj.friends=["peter","thor","tony"];
obj.age=20;
obj[key]["city"]="gonda";

//-----------------delete---------------------
delete obj.isAvenger;

console.log(obj);