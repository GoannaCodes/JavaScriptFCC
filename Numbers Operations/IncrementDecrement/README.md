## Increment & Decrementing by 1
Using this syntax eliminates the need to make an assignment using the previously stored value like:\
`myVar = myVar + 1;` and `myVar = myVar - 1;`

### Incrementing:
`var myVar = 87;`\
`myVar++;` <- now outputs 88

###Decrementing:
`var myVar = 11;`\
`myVar--;` <- now outputs 10

### Postfix `i++; or i--;` 
Increment/decrements and returns value **before** operation:\
`let x = 3;`\
`y = x++;`\
where `y = 3` and `x = 4`. So `y` stores the previous value of `x` and then `x` is incremented

### Prefix `++i; or --i;` 
Increment/decrements and returns value **after** operation:\
`let a = 3;`\
`b = --a;`\
where both `a` and `b` is 2. So `a` is decremented first and `b` stores the value of `a`
