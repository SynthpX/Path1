//Closures

function hitungPensiun(umurPensiun){
    return function(thnLahir){
        var x = ' tahun lagi sebelum pensiun';
        var umur = 2020 - thnLahir;
        console.log((umurPensiun - umur) + x);
    }
}

var hitung = hitungPensiun(65);
hitung(1997);

