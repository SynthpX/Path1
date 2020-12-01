/*
Basic Operators
*/

var now, yearYaen, yearFreya;
now = 2020;
ageYaen = 28;
ageFreya = 23;

//math op
yearYaen = now - ageYaen;
yearFreya = now - ageFreya;

console.log(yearYaen);

console.log(now + 2);
console.log(now / 10);


//logical op
var yaenOlder = ageYaen > ageFreya;
console.log(yaenOlder);

//typeof op
console.log(typeof yaenOlder);
console.log(typeof ageFreya);
console.log(typeof 'THis is String');
var x;
console.log(typeof x);