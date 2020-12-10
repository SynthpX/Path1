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

var pertanyaanku = pertanyaanInterview('programmer');
pertanyaanku('Adli');

var pertanyaanmu = pertanyaanInterview('guru');
pertanyaanmu('Iqbal');


