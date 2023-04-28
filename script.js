/* Accesses body element
const output = document.getElementById("output")   */

// This is an object
let person = {
    height: 72,
    weight: 250,
    hair: "brown",
    eyes: "blue",
};

//Outputs result into body element as text

//output.innerHTML = person.height;



// The for loop is intended to iterate through an array returning all of it's values based on their index
let array = [1, 2, 3, 4];
for (let k=0; k<array.length; k++) {
    console.log(array[k]);
}
array.forEach(v => {
    console.log(v * 2);
});
/* 
The for...in loop is intended to iterate over the keys (props) of a noniterable object
It returns ALL the keys of the object
Regalar Javascript objects are noniterable
 */
for (let v in person) {
    console.log(v);
}

// The for...of loop is intended to iterate through iterable objects including strings
// This includes ES6 objects of Map, Set, WeakMap, and WeakSet
for (let test of "hello") {
    console.log(test);
}

//Prior to ES6 a Javscript function was defined as follows

function add(x, y) {
    var sum = x + y;
    console.log(sum);
}
add(6, 7);

// An ES6 function is defined as follows
let subtract = (x, y) => {
    let difference = x - y;
    console.log(difference);
}
subtract(9, 2);

const x = () => console.log("hi");
x();

/* Destructuring purpose is to unpack:
1. values from arrays (even one returned by a function)
2. properties from objects
into distinct variables */

let arr = ["pink", "purple", "yelllow", "orange"];
let [one, two, three, four] = arr;
console.log(one, two, three, four);

let a = () => {
    return ["chevy", "ford", "gmc"];
}
let [maker1, , maker2] = a();
console.log(maker1, maker2);

// Destructuring objects is first used to break properties down into individual variables

let obj = {
    h: 100,
    s: true
}

// Can reassign property names with the following syntax
let { h:t, s:w } = obj;
console.log(t, w);