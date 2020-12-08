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

var Adli = new Manusia('Adli', 1990, 'Hadu');
var Camahe = new Manusia('Camahe', 1995, 'Hadu');
var Ismi = new Manusia('Ismi', 1997, 'Hadu');

Adli.hitungUmur();
Camahe.hitungUmur();
Ismi.hitungUmur();


