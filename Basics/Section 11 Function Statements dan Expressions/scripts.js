//function declaration
//function kegiatan(pekerjaan, nama ){}

//function expression
var kegiatan = function(pekerjaan, nama){
    var gaji;
    switch(pekerjaan){
        case 'guru':
            gaji = 2000;
            return nama + ' bekerja sebagai ' + pekerjaan + ' dan gajinya ' + gaji;
        case 'designer':
            gaji = 3000;
            return nama + ' bekerja sebagai ' + pekerjaan + ' dan gajinya ' + gaji;
        case 'programmer':
            gaji = 4000;
            return nama + ' bekerja sebagai ' + pekerjaan + ' dan gajinya ' + gaji;
        default:
            return nama + ' tidak bekerja.';
    }
}

console.log(kegiatan('guru', 'iqbal'));
console.log(kegiatan('programmer', 'fardi'));
console.log(kegiatan('jual cupang', 'fauzan'));