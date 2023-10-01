const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    const botaoSelcionado = document.querySelector(".botao.selecionado");
    botaoSelcionado.classList.remove("selecionado");
    botao.classList.add("selecionado");

    const personagemSelcionado = document.querySelector(".personagem.selecionado");
    personagemSelcionado.classList.remove("selecionado");
    personagens[indice].classList.add("selecionado");
  })
});
