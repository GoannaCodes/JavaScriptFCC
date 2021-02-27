/* Postfix increment
    Assignment (y stores previous value of x = 3; now y = 3)
    Decrement (x is now incremented by 1; now x = 4 and does not affect value of y)
*/
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// expected output: "x:4, y:3"

/* Postfix decrement
    Assignment (y stores previous value of x = 3; now y = 3)
    Decrement (x is now decremented by 1; now x = 2 and does not affect value of y)
*/

let x = 3;
const y = x--;

console.log(`x:${x}, y:${y}`);
// expected output: "x:2, y:3"
