//Primitive vs Object

//Primitive

var y = 20;
var n = y;
y = 50;

console.log(y); // 50
console.log(n); // 20



//Object

var obj1 = {
    nama: 'Adli',
    umur: 23
};

var obj2 = obj1;
obj1.umur = 25;
console.log(obj1.umur); //25
console.log(obj2.umur); //25


//Functions

var umur = 28;
var obj3 = {
    nama: 'Akbar',
    kota: 'Bandung'
};

function ganti(y,n){
    y = 30;
    n.kota = 'Jakarta';
}

ganti(umur, obj3);
console.log(umur); //30
console.log(obj3.kota); //Jakarta
