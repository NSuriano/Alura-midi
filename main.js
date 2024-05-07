function playSonido(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');


for(let contador = 0; contador < listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    console.log(contador)

    const idAudio = `#sonido_${instrumento}`;
    console.log(idAudio)

    tecla.onclick = function (){
        playSonido(idAudio);
    }
    //funcion para el teclado
    //tecla precionada
    tecla.onkeydown = function(evento){
        if(evento.code === 'Space' || evento.code === 'Enter') {

            tecla.classList.add('activa');
        }
    }
    
    //tecla sin precionar
   tecla.onkeyup = function(){
            tecla.classList.remove('activa');
    }

    
    
}






/*
const listaSonidos = document.querySelectorAll('.sonido');

const listaTeclas = document.querySelectorAll('.tecla');

const reproducir=[];

function playSonido() {
    for(let tecla=0; tecla <= listaTeclas.length; tecla++){
        listaTeclas[tecla].onclick= listaSonidos[tecla].play();

    }
    
    return 
    
} */



