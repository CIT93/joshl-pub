console.log("hello from the inside the main.js file");

//let myVar;

const myVar = 42;
const myVarType = typeof(myVar);
console.log("myVarType is " + myVarType);
console.log(`myVarType is ${myVarType}`);



function runNow () {
    if(myVarType === "string") {
        console.log(`will 11 this one run?`);
    } else {
        console.log(`will 13 this one run?`);
    }
}

runNow();
runNow();
