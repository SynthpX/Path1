var hao = {nama: 'HAO',
           tinggi: 92 ,
           berat: 1.95,
           kalkBMI: function(){
                this.BMI = (this.berat/this.tinggi*this.tinggi);
          }};
var max = {nama: 'MAX',
           tinggi: 1.69 ,
           berat: 78,
           kalkBMI: function(){
                this.BMI = this.berat/(this.tinggi*this.tinggi);
          }};

hao.kalkBMI();
max.kalkBMI();
console.log(hao, max);

if(max.BMI > hao.BMI){
    console.log(max.nama + ' lebih dari ' + hao.nama);
}else if(hao.BMI > max.BMI){
    console.log(hao.BMI + ' lebih dari ' + max.nama);
}else{
    console.log('hmmm');
}