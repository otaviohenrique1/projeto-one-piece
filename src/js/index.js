const botoes = document.querySelectorAll(".botao");

botoes.forEach((botao/* , key */) => {
  botao.addEventListener("click", () => {
    // console.log("Click: " + key);
    const botaoSelcionado = document.querySelector(".botao.selecionado");
    botaoSelcionado.classList.remove("selecionado");
    botao.classList.add("selecionado");
  })
});
