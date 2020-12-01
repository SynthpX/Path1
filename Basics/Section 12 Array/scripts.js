/*
Arrays
*/


//array bary
var nama = ['Adli', 'Iqbal', 'Fardi'];
var tahun = new Array(1990,1997,1998);

console.log(nama[0]);
console.log(nama.length);


//Ganti isi array
nama[1] = 'Camahe';
nama[nama.length] = 'Mery';
console.log(nama);

//tipe data yang berbeda
var contoh = ['adli', 'aasasas', 1997, 'guru', false];

contoh.push('biru');
contoh.unshift('Mr.');
console.log(contoh);

contoh.pop();
contoh.shift();
console.log(contoh);

console.log(contoh.indexOf(1997));
            
var apakah = contoh.indexOf('guru') === -1 ? 'Adli bukan guru' : 'Adli guru';

console.log(apakah);