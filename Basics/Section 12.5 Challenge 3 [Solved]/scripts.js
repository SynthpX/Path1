function kalkulator(bayar){
    var persentasi;
    if(bayar < 50){
        persentasi = .2;
    }else if(bayar >= 50 && bayar <=200){
        persentasi = .15;
    }else{
        persentasi = .1;
    }
    return persentasi * bayar;
}


//no 1
var totalbayar = [124, 48, 268];
var tips = [kalkulator(totalbayar[0]),
            kalkulator(totalbayar[1]),
            kalkulator(totalbayar[2])];
console.log(tips);


//no2
var totalnya = [tips[0]+totalbayar[0],
                tips[0]+totalbayar[1],
                tips[0]+totalbayar[2]];

console.log(totalnya);

