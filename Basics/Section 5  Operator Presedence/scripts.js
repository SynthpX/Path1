/*
Operator Presedence
*/

var now = 2018;
var yearYaen = 1989;
var fullAge = 18;

var isFullAge = now - yearYaen >= fullAge; // true

//read README.md table

console.log(isFullAge);

//Grouping
var ageYaen = now - yearYaen;
var ageFreya = 23;
var average = (ageYaen + ageFreya) / 2;
console.log(average);

//Multiple Assignments
var x, y;
x = y = (3 + 6) * 3 - 6; // 9 * 3 - 6 // 27 - 6 // 21
console.log(x, y);


// Other Op
x *= 2;
console.log(x);

x++;
console.log(x);

x--;
console.log(x);