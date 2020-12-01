/*
Looping dan Iterasi
*/


//For Loop

for (var i = 0; i < 10; i+=2){
    console.log(i);
}

//contoh
var adli = ['Adli', 'Akbar', 1997, 'Developer'];
//increment
for (var i=0; i<adli.length;i++){
    console.log(adli[i]);
}

//while loop


var i = 0;
while(i<adli.length){
    console.log(adli[i]);
    i++;
}

console.log('----------------------------continue dan break----------------------------------');
//continue dan break statement

//continue
var adli = ['Adli', 'Akbar', 1997, 'Developer'];

//munculkan array yang hanya tipe data string
for (var i=0; i<adli.length;i++){
    if(typeof adli[i] !== 'string') continue;
    console.log(adli[i]);
}

//break

//ketika terdapat tipe data selain string stop
for (var i=0; i<adli.length;i++){
    if(typeof adli[i] !== 'string') break;
    console.log(adli[i]);
}

console.log('----------------------------decrement----------------------------------');
//decrement

for (var i=adli.length - 1; i>=0;i--){
    console.log(adli[i]);
}