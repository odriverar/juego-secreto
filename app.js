//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Indica un número del 1 al 10'

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let maximosIntentos = 2;
//console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto
    return;
}

function verificarIntento() {
    //alert("Click desde el botón");
    let numeroDeUsuario =  parseInt(document.getElementById('valorUsuario').value);
    //console.log(typeof(numeroDeUsuario));
    //console.log(numeroSecreto);
    //console.log(typeof(numeroSecreto));
    //console.log(numeroDeUsuario);
    //console.log(numeroDeUsuario === numeroSecreto); //* == Para comparar valores, sin importar el tipo, === para comparar valores y el tipo de dato.
    //console.log(intentos);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1)? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        //El usuario no acertò
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'número secreto es menor')
        } else{
            asignarTextoElemento('p', 'número secreto es mayor')
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    //let valorCaja = document.querySelector('#valorUsuario').value = ''
    //valorCaja.value = '';
    document.querySelector('#valorUsuario').value = ''
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if (listaNumerosSorteados.length == maximosIntentos) {
        asignarTextoElemento('p', `Llegaste al número máximo de ${maximosIntentos} intentos`);
    } else {
        // Si ya sorteamos todos los numeros
        if (listaNumerosSorteados.length == numeroMaximo){
            asignarTextoElemento('p', 'Ya se sortearon todos los números');
        } else {
            //SI el numero generado esta incluido en la lista 
            if(listaNumerosSorteados.includes(numeroGenerado)){
                return generarNumeroSecreto();
            } else {
                listaNumerosSorteados.push(numeroGenerado);
                return numeroGenerado;
            }
        }
    }
    //return numeroSecreto;
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    return;
}

function reiniciarJuego(){
    //Limpiar la caja de texto
    limpiarCaja();
    //Inidcar mensaje de intervalo de números
    //Generar el número aleatorio
    //Inicializar el número de intentos
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego.
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();