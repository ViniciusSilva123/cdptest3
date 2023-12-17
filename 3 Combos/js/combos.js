let DivCombos = document.querySelector(".listapedidos");

fetch("combos.json").then((response) => {
  response.json().then((dados) => {
    dados.listaCombos.map((combos) => {
     DivCombos.innerHTML += `
      <div class="coluna">
      <a href="${combos.link}" target="_blank">
          <div class="descricao">
            <h3>${combos.nome}</h3>
            <h4>${combos.descricao}</h4>
          </div>
          <div class="preco">
            <p>R$${combos.preco}</p>
          </div>
        </a>
      </div>
        `;
    });
  });
});
