
var skor, skorRonde, playerAktif, cube, ayoBermain;

initialD();
//document.querySelector('#current-' + playerAktif).textContent = cube;
var skorTerakhir;
document.querySelector('.btn--roll').addEventListener('click', function(){

    if(ayoBermain){
        var cube1 = Math.floor(Math.random() * 6) + 1;
        var cube2 = Math.floor(Math.random() * 6) + 1;

        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';

        document.getElementById('dice-1').src = 'img/dice-' + cube1 + '.png';
        document.getElementById('dice-2').src = 'img/dice-' + cube2 + '.png';
        if(cube1 !== 1 && cube2 !== 1){
            skorRonde = skorRonde + cube1 + cube2;
            document.querySelector('#current--' + playerAktif).textContent = skorRonde;
        }else{
            playerBerikut();
        }

        /*
        if(cube === 6 && skorTerakhir===6){
            skor[playerAktif] = 0;
            document.querySelector('#skor-' + playerAktif).textContent = skor[playerAktif];
            playerBerikut();    
        }else if(cube > 1){
            skorRonde  += cube;
            document.querySelector('#current--' + playerAktif).textContent = skorRonde;
        }else{
            playerBerikut();
        }
            skorTerakhir = cube;
        */
    }
});

document.querySelector('.btn--hold').addEventListener('click', function(){

    if(ayoBermain){
        skor[playerAktif] += skorRonde;
        document.querySelector('#skor-' + playerAktif).textContent = skor[playerAktif];
        
        var inputSkor = document.querySelector('.skornya-final').value;
        var skorMenang;
        if(inputSkor){
            skorMenang = inputSkor;
        }else{
            skorMenang = 100;
        }
        if(skor[playerAktif] >= inputSkor){
            document.querySelector('#name--' + playerAktif).textContent = 'Pemenang!';
            document.getElementById('dice-1').style.display = 'none';
            document.getElementById('dice-2').style.display = 'none';
            document.querySelector('.player--' + playerAktif).classList.add('player--winner');
            document.querySelector('.player--' + playerAktif).classList.remove('player--active');
            document.querySelector('.btn--roll').style.display = 'none';
            document.querySelector('.btn--hold').style.display = 'none';
            ayoBermain = false;
        }else{
            playerBerikut();
        }
    }
});

document.querySelector('.btn--new').addEventListener('click', initialD);

function initialD(){
    skor = [0,0];
    skorRonde = 0;
    playerAktif = 0;
    ayoBermain = true;
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';

    document.getElementById('skor-0').textContent = '0';
    document.getElementById('current--0').textContent = '0';
    document.getElementById('skor-1').textContent = '0';
    document.getElementById('current--1').textContent = '0';
    document.getElementById('name--0').textContent = 'Player 1';
    document.getElementById('name--1').textContent = 'Player 2';
    document.querySelector('.player--0').classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--winner');
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--0').classList.add('player--active');
    document.querySelector('.btn--roll').style.display = 'block';
    document.querySelector('.btn--hold').style.display = 'block';
}

function playerBerikut(){
        playerAktif === 0 ? playerAktif = 1 : playerAktif = 0;
        skorRonde = 0;
        document.getElementById('current--0').textContent = '0';
        document.getElementById('current--1').textContent = '1';

        document.querySelector('.player--0').classList.toggle('player--active');
        document.querySelector('.player--1').classList.toggle('player--active');

        document.getElementById('dice-1').style.display = 'none';
        document.getElementById('dice-2').style.display = 'none';
}








