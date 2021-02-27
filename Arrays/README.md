# Arrays

JavaScript array variables are used to store several pieces of data in one place.

## Array Literal Declaration 
`var sandwich = ["peanut butter", "jelly", "bread"];` <- array literal\
Use square brackets with each entry denoted by `""` (if string) and separated by `,` 

Arrays can contain both string and numbers:\
`var myArray = ["a string", 2];`

## JS Array Constructor Declaration
Can also create an array using JavaScript's built-in array constructor:\
`var cars = new Array("Volvo", "Holden", "Mazda");` 

However, it should ideally be used if the array contains multiple entries. 

If you wanted to declare an array with just one entry using the constructor:\
`var points = new Array(40);` <- creates an array with 40 undefined elements\
instead of `points = [40];` like intended

## Empty Array Declaration
Ideal to use array literal to declare empty arrays:\
`var points = [];` <- like this (array literal)
`var points = new Array();` <- array constructor

