# Arrays

JavaScript array variables are used to store several pieces of data in one place.

## Declaration
`var sandwich = ["peanut butter", "jelly", "bread"]`\
Use square brackets with each entry denoted by `""` (if string) and separated by `,`

Arrays can contain both string and numbers:\
`var myArray = ["a string", 2];`

## Access & modifying entries
Can access data inside arrays through indexes:\
`var myArray = [50, 60, 70];` <- declaration\
`var myData = myArray[0];` <- stores '50' in myData

Entries of arrays can be changed freely:\
 `var myArray = [18, 64, 99];`\
 `myArray[0] = 45;` <- myArray is now `[45, 64, 99]`
