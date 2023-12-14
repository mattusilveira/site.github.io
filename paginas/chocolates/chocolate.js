// Adicionando os chocolates

const sectionChocolates = document.querySelector(".chocolates");

const chocolates = [
    {"imagem": "../../img/chocolates/buquedechocolate.jpeg", "nome": "Buquê de chocolate", "preco": 59.99},
    {"imagem": "../../img/chocolates/caixachocolates.jpeg", "nome": "Caixa de Ferrero Rocher", "preco": 70},
    {"imagem": "../../img/chocolates/floresdocampoechocolate.jpeg", "nome": "Flores do Campo e Ferrero Rocher", "preco": 39.99},
    {"imagem": "../../img/chocolates/kitcarinho.jpeg", "nome": "Kit Carinho", "preco": 89.99},
    {"imagem": "../../img/chocolates/mixchocolateeurso.jpeg", "nome": "Mix Ferrero Rocher e Pelúcia", "preco": 119.99},
    {"imagem": "../../img/cestas/cestacafédamanhã.jpeg", "nome": "Cesta Café da Manhã", "preco": 190},
    {"imagem": "../../img/cestas/cestacomvinhoechocolate.jpeg", "nome": "Cesta Vinho e Chocolate", "preco": 200},
    {"imagem": "../../img/cestas/cestadoceencanto.jpeg", "nome": "Cesta Doce Encanto", "preco": 65},
]

function adicionarChocolates() {
    chocolates.forEach((item) => {
        sectionChocolates.innerHTML += `
        <div class="item">
            <img src="${item.imagem}" alt="${item.nome}">
            <div class="nome">${item.nome}</div>
            <div class="preco">R$ ${Number(item.preco).toFixed(2)}</div>
        </div>
        `;
    })
}

adicionarChocolates();

// Funções de ordenação

const botaoMaiorPreco = document.querySelector("#maiorPreco");
const botaoMenorPreco = document.querySelector("#menorPreco");

function ordenarMaiorPreco() {
    chocolates.sort((a, b) => {
        return b.preco - a.preco;
    })
    sectionChocolates.innerHTML = "";
    adicionarChocolates();
    botaoMaiorPreco.classList.add("ativo");
    botaoMenorPreco.classList.remove("ativo");
}

function ordenarMenorPreco() {
    chocolates.sort((a, b) => {
        return a.preco - b.preco;
    })
    sectionChocolates.innerHTML = "";
    adicionarChocolates();
    botaoMenorPreco.classList.add("ativo");
    botaoMaiorPreco.classList.remove("ativo");
}

botaoMaiorPreco.onclick = ordenarMaiorPreco;
botaoMenorPreco.onclick = ordenarMenorPreco;