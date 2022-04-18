function crearPalabraSecreta(solucion){
    for(i=0;i<solucion.length;i++){
        var etiqueta = "div" + i + solucion[i];
        var divLetra = document.createElement("div");
        divLetra.setAttribute("id",etiqueta);
        divLetra.classList.add("letraTablero");
        var secreto = document.querySelector("#secreto");
        secreto.appendChild(divLetra);
        crearGuiones(divLetra,i);
    }
    return;
}

function crearGuiones(divLetra,indice){
    var etiqueta = "guion" + indice;
   
    guion = document.createElement("canvas");

    if(window.innerWidth>480){
        guion.setAttribute("width","90px");
        guion.setAttribute("height","88px");
    }
    else{
        guion.setAttribute("width","46px");
        guion.setAttribute("height","42px");
    }

    guion.classList.add("guion");
    guion.setAttribute("id",etiqueta);
    divLetra.appendChild(guion);

    var graficoGuion = document.getElementById(etiqueta);
    var pincel2 = graficoGuion.getContext("2d");
    pincel2.strokeStyle = "#0A3871";
    pincel2.lineWidth = 4;
    pincel2.lineCap = "round";
    pincel2.beginPath();

    if(window.innerWidth>480){
        pincel2.moveTo(10,80);
        pincel2.lineTo(80,80);
    }
    else{
        pincel2.moveTo(5,38);
        pincel2.lineTo(38,38);
    }

    pincel2.stroke();
    return;
}

function insertarLetra(letra,indice){
    var text = document.createTextNode(letra);
    var etiqueta = "div" + indice + letra;
    var divLetra = document.getElementById(etiqueta);
    divLetra.appendChild(text);
    return;
}


function dibujarLetraIncorrecta(letra,indice){
    var etiqueta = "div" + indice + letra;
    var divLetra = document.createElement("div");
    divLetra.setAttribute("id",etiqueta);
    divLetra.classList.add("letraDescartada");
    var error = document.querySelector("#error");
    error.appendChild(divLetra);
    return;
}