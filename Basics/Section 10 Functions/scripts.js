

function hitungUmur(tanggalLahir){
    return 2020 - tanggalLahir;
}

var umurAdli = hitungUmur(1997);
var umurIqbal = hitungUmur(1993);
console.log('Adli Berumur ' + umurAdli + ' Tahun.');
console.log('Iqbal Berumur ' + umurIqbal + ' Tahun.');


function tahunPensiun(tahun, nama){
    var umur = hitungUmur(tahun);
    var pensiun = 65 - umur;
    
    if(pensiun > 0){
        console.log(nama + ' pensium dalam ' + pensiun + ' tahun.');
    }else{
        console.log(nama + ' Sudah Pensiun');
    }
    
}

tahunPensiun(1997, 'Adli');
tahunPensiun(1993, 'Iqbal');
tahunPensiun(1953, 'Mery');