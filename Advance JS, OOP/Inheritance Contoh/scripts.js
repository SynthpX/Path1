var Adli = {
    nama: 'Adli',
    tglLahir: 1990,
    pekerjaan: 'Hadu'
};

//buat object menggunakan constructor

var Manusia = function(nama, tglLahir, pekerjaan){
    this.nama = nama;
    this.tglLahir = tglLahir;
    this.pekerjaan = pekerjaan;
}

Manusia.prototype.hitungUmur = function(){
    console.log(2020 - this.tglLahir);
}

Manusia.prototype.namaBelakang = 'Akbar';

var Adli = new Manusia('Adli', 1997, 'Hadu');
var Camahe = new Manusia('Camahe', 1995, 'Hadu');
var Ismi = new Manusia('Ismi', 1997, 'Hadu');

Adli.hitungUmur();
Camahe.hitungUmur();
Ismi.hitungUmur();

console.log(Camahe.namaBelakang);
console.log(Adli.namaBelakang);
console.log(Ismi.namaBelakang);


