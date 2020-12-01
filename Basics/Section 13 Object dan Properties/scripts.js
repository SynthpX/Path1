/*
Object dan Properties
*/


//cara 1 init Object
var adli = {
    nama: 'Adli',
    umur: 23,
    pacar: 'Camahe',
    teman: ['Iqbal', 'Fardi', 'Gifar', 'Ridwan'],
    pekerjaan: 'tidak ada',
    menikah: false
};


//beragam cara mengambil data dari object
console.log(adli);
console.log(adli.pacar);
console.log(adli['menikah']);
var x = 'umur';
console.log(adli[x]);

adli.pekerjaan = 'Programmer';
adli['menikah'] = true;
console.log(adli);


//cara 2 init Object
var camahe = new Object();
camahe.nama = 'Nurfaisyah';
camahe.umur = 25;
camahe['pacar'] = 'Adli';
console.log(camahe);