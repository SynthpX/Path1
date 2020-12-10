//function return function

function pertanyaanInterview(pekerjaan){
    if(pekerjaan === 'programmer'){
        return function(nama){
            console.log(nama + ' , apa kamu jago ? ');
        }
    }else if( pekerjaan === 'guru'){
        return function(nama){
            console.log(nama + ' guru hm ?');
        }
    }else{
        return function(nama){
            console.log('Halo ' + nama);
        }
    }
}
//pemanggilan cara 1
var pProgrammer = pertanyaanInterview('programmer');
pProgrammer('Adli');
pProgrammer('Fardi');
pProgrammer('Gifar');

var pGuru = pertanyaanInterview('guru');
pGuru('Iqbal');
pGuru('David');

//pemanggilan cara 2
pertanyaanInterview('programmer')('Akabr');


