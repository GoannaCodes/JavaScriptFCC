
/* Prefix increment
    Decrement (a is now incremented by 1; now a = 4)
    Assignment (y stores value of a = 4; now y = 4)
*/
let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// expected output: "a:4, b:4"

/* Prefix decrement
    Decrement (a is now decremented by 1; now a = 2)
    Assignment (y stores value of a = 2; now y = 2)
*/
let a = 3;
const b = --a;

console.log(`a:${a}, b:${b}`);
// expected output: "a:2, b:2"
