//IIFE

//tanpa IIFE
/*
function game(){
    var skor = Math.random() * 20;
    console.log(skor >= 5);
} 
game();
*/



//dengan IIFE

(function (){
    var skor = Math.random() * 10;
    console.log(skor >= 5);
})();

(function (hai){
    var skor = Math.random() * 10;
    console.log(skor >= 5 - hai);
})(5);
