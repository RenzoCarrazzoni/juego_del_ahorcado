var palabraClave = ["CODING","CSS","PYTHON","ALURA","ORACLE"];

var botonStart = document.querySelector("#btn-init");
var botonAdd = document.querySelector("#btn-add");
var botonQuit = document.querySelector("#btn-quit");
var botonReset = document.querySelector("#btn-reset");
var botonAgregar = document.querySelector("#btn-add");
var botonGuardar = document.querySelector("#btn-save");
var botonCancelar = document.querySelector("#btn-cancel");

var intentos;
var solucion;
var progreso = [];
var errores = [];

botonStart.addEventListener("click",function(event){
    event.preventDefault();
    gameInit();    
});

botonAgregar.addEventListener("click",function(event){
    event.preventDefault();
    removerInterfazInicio();
    removerInterfazJuego();
    desplegarInterfazAgregar();
});

botonGuardar.addEventListener("click",function(event){
    event.preventDefault();
    var input = document.querySelector("#input-texto");
    if(!verificarPalabra(input.textContent)){
        alert("No ha ingresado una palabra válida")
    }
    else{
        palabraClave.push(input.textContent);
        gameInit();
    }

});

botonQuit.addEventListener("click",function(event){
    event.preventDefault();
    removerInterfazJuego();
    desplegarInterfazInicio();
    reiniciarVariables();
});

botonReset.addEventListener("click",function(event){
    event.preventDefault();
    removerInterfazJuego();
    gameInit();  
});

botonCancelar.addEventListener("click",function(event){
    event.preventDefault();
    removerInterfazAgregar();
    desplegarInterfazInicio();
});

document.addEventListener("keydown",function(event){

    var coincidencia = false;
    var ingreso = new RegExp(event.key,'g');
    var alfabeto = /^[A-Z]+$/;

    if(solucion.length > 0 && intentos > 0){

        if(verificarInput(event.key)){
            if(!ingreso.test(progreso)){
                for(var i = 0; i < solucion.length; i++){
                    var validacion = validarLetra(solucion.charAt(i),event.key);

                    if(validacion){
                        progreso[i] = event.key;
                        insertarLetra(solucion.charAt(i),i);
                        coincidencia = true;

                        if(progreso.join("") == solucion){
                            solucion = "";
                            mostrarResultado(intentos);
                            break;
                        }
                    }
                }

                if(!coincidencia && !ingreso.test(errores)){
                   if(event.key.match(alfabeto)){
                        intentos--;
                        errores.push(event.key)
                        dibujarLetraIncorrecta(event.key,errores.length);
                        insertarLetra(event.key,errores.length)
                        crearTableroJuego(intentos);
                    }

                    if (intentos == 0) {
                        mostrarResultado(intentos);
                    }
                }
            }
        }
        else{
            alert("No ha ingresado una letra válida");
        }

    }
});


function generarPalabra(){
    var palabra = palabraClave[Math.floor(Math.random()*palabraClave.length)];

    for(var i = 0; i < palabra.length; i++){
        progreso.push("");
    }

    return palabra;
}

function verificarInput(letra){
    if(letra.charCodeAt() < 65 || letra.charCodeAt() > 90){
        return false;
    }
    else{
        return true;
    }
}

function verificarPalabra(palabra){
    palabraValida = true;

    if(palabra.length > 8 || palabra.length == 0){
        return false;
    }
    else{
        var input = new RegExp(palabra,'g');

        for(var i = 0; i < palabra.length;i++){
            if(!verificarInput(palabra.charAt(i))){
                return false;
            }
        }
        for(var j = 0; j < palabraClave.length;j++){
            if(input.test(palabraClave[j])){
                return false;
            }
        }
        return true;
    }
}

function validarLetra(letraSolucion,letraInput){
    if(letraSolucion == letraInput){
        return true;
    }
    else{
        return false;
    }
}

function mostrarResultado(intentos){
    if(intentos>0){
        dibujarMensajeGanador();
    }
    else{
        dibujarMensajePerdedor();
    }
    return;
}

function reiniciarVariables(){
    intentos = 0;
    solucion = "";
    progreso = [];
    errores = [];
    return;
}

function gameInit(){
    reiniciarVariables();
    solucion = generarPalabra();
    removerInterfazInicio();
    removerInterfazAgregar();
    desplegarInterfazJuego();
    intentos = 8;
    crearTableroJuego(intentos);
    crearPalabraSecreta(solucion);
}