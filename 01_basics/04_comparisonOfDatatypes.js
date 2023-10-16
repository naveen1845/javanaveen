console.log(2 > 1);
console.log("2" > 1);
console.log("02" > 1);


console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
/*
reason:
equality check(==) and comparisons(<,>,<=,>=) work differently.
Comparisons convert null to a number, treating it as 0.

You should AVOID writing such comparisons, this creates unwanted
confusion. CLEAN CODES have more value
*/


console.log("2" == 0);
console.log("2" === 0);
// === - strict check
// checks even the datatype.