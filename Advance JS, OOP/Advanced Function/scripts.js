var tahun = [1990, 1965, 1937, 2005, 1998];

function kalkTahun(arr, fn){
    var arrHasil = [];
    for (i = 0; i < arr.length; i++){
        arrHasil.push(fn(arr[i]));
    }
    return arrHasil;
}
function hitungUmur(el){
    return 2020 - el;
}

function dewasaCek(el){
    return el >= 18;
}

function hitungDetak(el){
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    }else{
        return -1;
    }
    
}

var umur = kalkTahun(tahun, hitungUmur);
var dewasaKah = kalkTahun(tahun, dewasaCek);
var detakH = kalkTahun(tahun, hitungDetak);

console.log(umur);
console.log(dewasaKah);
console.log(detakH);

