/*
If else statement
*/

var firstName = 'Freya';
var civilStatus = 'single';

if(civilStatus === 'married'){
    console.log(firstName + ' is married.');
}else if (civilStatus === 'single'){
    console.log(firstName + ' is single.');
}else {
    console.log(firstName + ' dosent have status.');
}

var isMarried = true;

if(isMarried){
    console.log(firstName + ' is married.');
}else{
     console.log(firstName + ' single.');
}

var massMax = 80;
var heightMax = 1.70;

var massHao = 90;
var heightHao = 1.80;

var BMIMax = massMax / (heightMax * heightMax);
var BMIHao = massHao / (heightHao * heightHao);

if (BMIMax > BMIHao){
    console.log('Max\'s BMI is higher than Hao.');
}else {
    console.log('Hao\'s BMI is higher than Max.');
}