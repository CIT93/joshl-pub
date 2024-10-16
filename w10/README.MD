Function example:
I understood the function example but seeing more examples is always good and is a good refresher.  I always strugged with the concept behind "return" but seeing as we console.log the whole variable name, the return part makes more sense now.

const add2 = function(a = 10) {
    return 2 + a;
}

a = 10 ; is the default value, it gets replaced as soon as you set a to its own value.

const result = add2(2);
console.log(result); -> outputs 4; 2 + 2 = 4; 2 + a


function w/ array aka spread functions:
const add2 = function(...a) {
    return 2 + a[3];
}

const result = add2(1, 2, 3, 4);
console.log(result);
6 -> 2 + a[3] -> 2 + 4 = 6


function w/ IFFE
//IFFE 

w/ a variable: 
const a = 3;
(function(a) {
    console.log(a)
}) (a);

w/o a variable:
(function() {
    console.log("isnide the IFFE")
}) ();