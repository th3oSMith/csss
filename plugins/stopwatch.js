var secon=0 //initialise les secondes
var minu=0 //initialise les minutes

function chrono(){
secon++;
if (secon>59){secon=0;minu++} //si les secondes > 59,

return ("0" + minu).slice(-2)+":"+("0" + secon).slice(-2);

}

function RAZ(){ //fonction qui remet les compteurs à 0
secon=0;
minu=0;

}
