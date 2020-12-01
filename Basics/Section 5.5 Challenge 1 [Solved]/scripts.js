var massMax = 80;
var heightMax = 1.70;

var massHao = 70;
var heightHao = 1.80;

var BMIMax = massMax / (heightMax * heightMax);
var BMIHao = massHao / (heightHao * heightHao);

var maxHigher = BMIMax > BMIHao;

console.log('Is Max\'s BMI higher than Hao\'s ? ' + 
           maxHigher);