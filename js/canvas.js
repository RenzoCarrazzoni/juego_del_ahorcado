var graficoAhorcado = document.querySelector("#ahorcado");
var pincel1 = graficoAhorcado.getContext("2d");


pincel1.lineWidth = 5;
pincel1.lineCap = "round";
pincel1.strokeStyle = "#0A3871"

function crearTableroJuego(intentos){
    if(intentos == 8){
        pincel1.beginPath();
        pincel1.moveTo(33,360);
        pincel1.lineTo(327,360);
        pincel1.stroke();
    }
    if(intentos == 7){
        pincel1.beginPath();
        pincel1.moveTo(96,359);
        pincel1.lineTo(96,2.5);
        pincel1.stroke();
    }
    if(intentos == 6){
        pincel1.beginPath();
        pincel1.moveTo(96,2.5);
        pincel1.lineTo(274,2.5);
        pincel1.stroke();
    }
    if(intentos == 5){
        pincel1.beginPath();
        pincel1.moveTo(274,2.5);
        pincel1.lineTo(274,50);
        pincel1.stroke()
        pincel1.fillStyle = "#0A3871";
        pincel1.beginPath()
        pincel1.arc(274, 81.5, 31.5, 0, 2*Math.PI);
        pincel1.fill();
        pincel1.fillStyle = "#F3F5FC";
        pincel1.beginPath()
        pincel1.arc(274, 81.5, 26.5, 0, 2*Math.PI);
        pincel1.fill();
    }
    if(intentos == 4){
        pincel1.beginPath();
        pincel1.moveTo(274,113);
        pincel1.lineTo(238,185);
        pincel1.stroke();
    }
    if(intentos == 3){
        pincel1.beginPath();
        pincel1.moveTo(274,113);
        pincel1.lineTo(310,185);
        pincel1.stroke();
    }
    if(intentos == 2){
        pincel1.beginPath();
        pincel1.moveTo(274,113);
        pincel1.lineTo(274,248);
        pincel1.stroke();
    }
    if(intentos == 1){
        pincel1.beginPath();
        pincel1.moveTo(274,248);
        pincel1.lineTo(238,320);
        pincel1.stroke();
    }
    if(intentos == 0){
        pincel1.beginPath();
        pincel1.moveTo(274,248);
        pincel1.lineTo(310,320);
        pincel1.stroke();
    }
    return;
}