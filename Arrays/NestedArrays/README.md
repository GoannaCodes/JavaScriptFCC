# Nested Arrays

Nested arrays are arrays that are contained in another array:\
`var myArray = [["Bulls", 23], ["White Sox", 45]]`

## Multi-dimensional arrays 
Multi-dimensional arrays are array of arrays. Multiple brackets may be used to access specific information in multi-dimensional arrays:\
`var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];`\
`var myData = myArray[2][1];` <- first accesses the [7, 8, 9] entry, then retrieves the '8'

The first set of brackets refers to the outer-most entries, and each additional pair of brackets refers to the next level of entries inside. 
