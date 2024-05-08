const botao = document.getElementById('meuBotao');
const mensagem = document.getElementById('mensagem');

botao.addEventListener('mouseover', () => {
  mensagem.classList.add('mostrar');
});

botao.addEventListener('mouseout', () => {
  mensagem.classList.remove('mostrar');
});
