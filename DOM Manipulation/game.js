
var skor, skorRonde, playerAktif, cube;

skor = [0,0];
skorRonde = 0;
playerAktif = 0;

//document.querySelector('#current-' + playerAktif).textContent = cube;
document.querySelector('.dice').style.display = 'none';

document.getElementById('skor-0').textContent = '0';
document.getElementById('current--0').textContent = '0';
document.getElementById('skor-1').textContent = '0';
document.getElementById('current--1').textContent = '0';

document.querySelector('.btn--roll').addEventListener('click', function(){
    var cube = Math.floor(Math.random() * 6) + 1;
    var cubeDOM = document.querySelector('.dice');
    cubeDOM.style.display = 'block';
    cubeDOM.src = 'img/dice-' + cube + '.png';

    if(cube > 1){
        skorRonde  += cube;
        document.querySelector('#current--' + playerAktif).textContent = skorRonde;
    }else{
        playerBerikut();
    }
    
});

document.querySelector('.btn--hold').addEventListener('click', function(){
    skor[playerAktif] += skorRonde;
    document.querySelector('#skor-' + playerAktif).textContent = skor[playerAktif];
    if(skor[playerAktif] >= 20){
        document.querySelector('#name--' + playerAktif).textContent = 'Pemenang!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player--' + playerAktif).classList.add('player--winner');
        document.querySelector('.player--' + playerAktif).classList.remove('player--active');
    }else{
        playerBerikut();
    }
});

function playerBerikut(){
        playerAktif === 0 ? playerAktif = 1 : playerAktif = 0;
        skorRonde = 0;
        document.getElementById('current--0').textContent = '0';
        document.getElementById('current--1').textContent = '1';

        document.querySelector('.player--0').classList.toggle('player--active');
        document.querySelector('.player--1').classList.toggle('player--active');

        document.querySelector('.dice').style.display = 'none';
}






