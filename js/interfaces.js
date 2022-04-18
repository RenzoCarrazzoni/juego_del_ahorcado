var contenedor = document.querySelector("#contenedor-ahorcado");

function desplegarInterfazInicio(){
    fadeIn(document.querySelector(".interfaz-inicio"));
    return;
}

function removerInterfazInicio(){
    fadeOut(document.querySelector(".interfaz-inicio"));
    return;
}

function desplegarInterfazJuego(){
    fadeIn(document.querySelector(".interfaz-juego"));
    return;
}

function removerInterfazJuego(){
    removerMensajeGanador();
    removerMensajePerdedor();
    fadeOut(document.querySelector(".interfaz-juego"));
    var tablero = document.querySelector("#secreto");
    var errores = document.querySelector("#error");
    tablero.innerHTML="";
    errores.innerHTML="";
    pincel1.clearRect(0, 0, graficoAhorcado.width, graficoAhorcado.height);
    return;
}

function desplegarInterfazAgregar(){
    fadeIn(document.querySelector(".interfaz-agregar"));
    return;  
}

function removerInterfazAgregar(){
    fadeOut(document.querySelector(".interfaz-agregar"));
    return;
}

function dibujarMensajeGanador(){
    var mensaje = document.querySelector("#victory");
    fadeIn(mensaje);
}

function removerMensajeGanador(){
    var mensaje = document.querySelector("#victory");
    fadeOut(mensaje);
}

function dibujarMensajePerdedor(){
    var mensaje = document.querySelector("#end");
    fadeIn(mensaje);
}

function removerMensajePerdedor(){
    var mensaje = document.querySelector("#end");
    fadeOut(mensaje);
}

function fadeIn(argumento){
    argumento.classList.remove("fadeOut");
    argumento.classList.add("fadeIn");
    return;
}

function fadeOut(argumento){
    argumento.classList.remove("fadeIn");
    argumento.classList.add("fadeOut");
    return;
}