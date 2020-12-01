/*
Object dan Method
*/


//cara 1 init Object
var adli = {
    nama: 'Adli',
    lahirT: 1997,
    pacar: 'Camahe',
    teman: ['Iqbal', 'Fardi', 'Gifar', 'Ridwan'],
    pekerjaan: 'tidak ada',
    menikah: false,
    kalkUmur: function(){
        this.umur = 2020 - this.lahirT;
    }
};


adli.kalkUmur();
console.log(adli);


