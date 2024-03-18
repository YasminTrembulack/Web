botao = document.getElementById("play-pause");
audio = document.getElementById("audio-capitulo");
texto_capitulo = document.getElementById("capitulo");
botao_proximo = document.getElementById("proximo");
botao_anterior = document.getElementById("anterior");

let capitulo = 1;

function playAudio(){
    if(audio.paused){
        audio.play();
        botao.className = 'bi bi-pause-circle-fill';
    }
    else{
        audio.pause();
        botao.className = 'bi bi-play-circle-fill';
    }
}

function proximo(){
    if(capitulo == 9){
        capitulo = 1;
    }
    else{
        capitulo++;
    }
    audio.setAttribute("src", `./books/dom-casmurro/${capitulo}.mp3`);
    texto_capitulo.textContent = `Capítulo ${capitulo}`;
    botao.className = 'bi bi-play-circle-fill';
}

function anterior(){
    if(capitulo == 1){
        capitulo = 9;
    }
    else{
        capitulo--;
    }
    audio.setAttribute("src", `./books/dom-casmurro/${capitulo}.mp3`);
    texto_capitulo.textContent = `Capítulo ${capitulo}`;
    botao.className = 'bi bi-play-circle-fill';
}

botao.addEventListener('click', playAudio);
botao_proximo.addEventListener('click', proximo);
botao_anterior.addEventListener('click', anterior)