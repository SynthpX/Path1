var pointAdli = (89 + 120 + 103)/3;
var pointIqbal = (116 + 94 + 123)/3;
var pointMery = (97 + 134 + 105)/3;

console.log(pointAdli, pointIqbal);

if(pointAdli > pointIqbal && pointAdli > pointMery){
    console.log('Adli');
}else if (pointIqbal > pointAdli && pointIqbal > pointMery){
    console.log('Iqbal');
}else if(pointMery > pointAdli && pointMery > pointIqbal){
    console.log('Mery');
}else{
    console.log('Draw');
}





if(pointAdli > pointIqbal){
    console.log('Team adli memang dengan ' + pointAdli);
}else if (pointIqbal > pointAdli){
    console.log('Team iqbal menang dengan ' + pointIqbal);
}else{
    console.log('Draw');
}