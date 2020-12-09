//buat object object.create method
var manusiaProto = {
    hitungUmur: function(){
        console.log(2020-this.thnLahir);
    }
}

var adli = Object.create(manusiaProto);
adli.nama = 'Adli';
adli.thnLahir = 1997;
adli.pekerjaan = 'Programmer';


var Iqbal = Object.create(manusiaProto,
    {
    nama: { value: 'Iqbal'},
    thnLahir: { value: 1997},
    pekerjaan: { value: 'Programmer'}
});


