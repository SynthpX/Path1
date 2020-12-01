var job = '32';

switch(job) {
    case 'teacher':
        console.log('Im a teacher');
        break;
    case 'driver':
        console.log('Im a Driver');
        break;
    case 'designer':
        console.log('Im a Desginer');
        break;
    default:
        console.log('I dont have a ajob :)');
}



var firstName = 'Adly';
var umur = 23;

switch(true){
    case umur < 13:
        console.log('below 13');
        break;
    case umur >= 13 && umur < 20:
        console.log('between 13 and 20');
        break;
    default:
        console.log('More than 20');
}