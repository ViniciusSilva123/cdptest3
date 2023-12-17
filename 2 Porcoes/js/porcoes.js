let divPorcoes = document.querySelector(".listapedidos");

fetch("porcoes.json").then((response) => {
  response.json().then((dados) => {
    dados.listaPorcoes.map((porcoes) => {
      divPorcoes.innerHTML += `
        <div class="coluna">
        <a href="${porcoes.link}" target="_blank">
            <div class="descricao">
              <h3>${porcoes.nome}</h3>
              <h4>${porcoes.descricao}</h4>
            </div>
            <div class="preco">
              <p>R$${porcoes.preco}</p>
            </div>
          </a>
        </div>
        `;
    });
  });
});
