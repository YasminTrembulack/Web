
check = document.querySelector('[name="opcao-imagem"]:checked').id;
check = document.querySelector('[name="opcao-cor"]:checked').id

text_cor = document.getElementById("nome-cor-selecionada");
text_titulo = document.getElementById("titulo-produto");
imagem_00 = document.getElementById("0-imagem-miniatura");
imagem_01 = document.getElementById("1-imagem-miniatura");
imagem_02 = document.getElementById("2-imagem-miniatura");
imagem_visualizacao = document.getElementById("imagem-visualizacao");

let cor = 'azul-inverno';
let imagem = 1;
let tamanho = 45

function trocaCor(){
    check = document.querySelector('[name="opcao-cor"]:checked').id

    if(check[0] == 0){
        //text_cor.innerHTML = 'Cor - Verde Cipreste';
        cor = 'verde-cipreste';
    }else if(check[0] == 1){
        //text_cor.innerHTML = 'Cor - Azul Inverno';
        cor = 'azul-inverno';
    }else if(check[0] == 2){
        //text_cor.innerHTML = 'Cor - Meia Noite';
        cor = 'meia-noite';
    }else if(check[0] == 3){
       // text_cor.innerHTML = 'Cor - Estelar';
        cor = 'estelar';
    }else if(check[0] == 4){
        //text_cor.innerHTML = 'Cor - Rosa Claro';
        cor = 'rosa-claro';
    }

    text_cor.innerHTML = `Cor - ${cor.charAt(0).toUpperCase() + cor.slice(1).toLowerCase()}`;
    text_titulo.innerHTML = `Pulseira loop esportiva ${cor} para caixa de ${tamanho} mm`;

    imagem_00.src = `.\\imagens\\opcoes-cores\\imagens-${cor}\\imagem-0.jpeg`;
    imagem_01.src = `.\\imagens\\opcoes-cores\\imagens-${cor}\\imagem-1.jpeg`;
    imagem_02.src = `.\\imagens\\opcoes-cores\\imagens-${cor}\\imagem-2.jpeg`;
    imagem_visualizacao.src = `.\\imagens\\opcoes-cores\\imagens-${cor}\\imagem-${imagem}.jpeg`;

    console.log(cor);
    console.log(imagem);
}

function trocarImagem(){
    check = document.querySelector('[name="opcao-imagem"]:checked').id;
    imagem = check[0];
    imagem_visualizacao.src = `.\\imagens\\opcoes-cores\\imagens-${cor}\\imagem-${imagem}.jpeg`;
}

function trocarTamanho(){
    check_tamanho = document.querySelector('[name="opcao-tamanho"]:checked').id
    if(check_tamanho[0] == 0){
        //imagem_visualizacao.style.transform = 'scale(0.9)'; //Com css
        tamanho = 41;
        imagem_visualizacao.classList.add("caixa-pequena");
    }else{
        //imagem_visualizacao.style.transform = 'scale(1)'; //Com css
        tamanho = 45;
        imagem_visualizacao.classList.remove("caixa-pequena");
    }
    text_titulo.innerHTML = `Pulseira loop esportiva ${cor} para caixa de ${tamanho} mm`;
}