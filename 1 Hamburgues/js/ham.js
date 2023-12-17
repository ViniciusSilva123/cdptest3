let divhambur = document.querySelector(".listapedidos");

fetch("ham.json").then((response) => {
  response.json().then((dados) => {
    dados.listahambur.map((hambur) => {
      divhambur.innerHTML += `
        <div class="coluna">
          <a href="${hambur.link}" target="_blank">
            <div class="descricao">
              <h3>${hambur.nome}</h3>
              <h4>${hambur.descricao}</h4>
            </div>
            <div class="preco">
              <p>R$${hambur.preco}</p>
            </div>
          </a>
        </div>
        `;
    });
  });
});
