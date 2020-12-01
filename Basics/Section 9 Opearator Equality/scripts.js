// falsy values : undefined , null, 0 , '' , NaN
// trurhy values : NOT falsy

var tinggi;

tinggi = 23;

if(tinggi || tinggi === 0){
    console.log('Variable defined');
}else{
    console.log('Variable not defined');
}


//Equality Operator 

// contoh 23 == '23' adalah TRUE karena ignore tipe data
//  23 === '23' FALSE harus sama tipe data

if(tinggi == '23'){
    console.log('== Operator have coercion!');
}