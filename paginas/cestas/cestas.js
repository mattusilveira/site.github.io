// Adicionando as cestas

const sectionCestas = document.querySelector(".cestas");

const cestas = [
    {"imagem": "../../img/cestas/cestaaniversario.jpeg", "nome": "Cesta Aniversário", "preco": 155},
    {"imagem": "../../img/cestas/cesta.jpeg", "nome": "Cesta Chocolates", "preco": 99.99},
    {"imagem": "../../img/cestas/cestacafédamanhã.jpeg", "nome": "Cesta Café da Manhã", "preco": 190},
    {"imagem": "../../img/cestas/cestacomvinhoechocolate.jpeg", "nome": "Cesta Vinho e Chocolate", "preco": 200},
    {"imagem": "../../img/cestas/cestadefloresdecampo.jpeg", "nome": "Cesta Flores do Campo", "preco": 59.99},
    {"imagem": "../../img/cestas/cestadoceencanto.jpeg", "nome": "Cesta Doce Encanto", "preco": 65},
    {"imagem": "../../img/cestas/cestagirassois.jpeg", "nome": "Cesta Girassóis", "preco": 80},
    {"imagem": "../../img/cestas/cestagourmet.jpeg", "nome": "Cesta Gourmet", "preco": 150},
    {"imagem": "../../img/cestas/cestarosas.jpeg", "nome": "Cesta Rosas", "preco": 100},
    {"imagem": "../../img/cestas/cestarosasamarelas.jpeg", "nome": "Cesta Rosas Amarelas", "preco": 110},
    {"imagem": "../../img/cestas/cestarosasbrancas.jpeg", "nome": "Cesta Rosas Brancas", "preco": 110},
]

function adicionarCestas() {
    cestas.forEach((item) => {
        sectionCestas.innerHTML += `
        <div class="item">
            <img src="${item.imagem}" alt="${item.nome}">
            <div class="nome">${item.nome}</div>
            <div class="preco">R$ ${Number(item.preco).toFixed(2)}</div>
        </div>
        `;
    })
}

adicionarCestas();

// Funções de ordenação

const botaoMaiorPreco = document.querySelector("#maiorPreco");
const botaoMenorPreco = document.querySelector("#menorPreco");

function ordenarMaiorPreco() {
    cestas.sort((a, b) => {
        return b.preco - a.preco;
    })
    sectionCestas.innerHTML = "";
    adicionarCestas();
    botaoMaiorPreco.classList.add("ativo");
    botaoMenorPreco.classList.remove("ativo");
}

function ordenarMenorPreco() {
    cestas.sort((a, b) => {
        return a.preco - b.preco;
    })
    sectionCestas.innerHTML = "";
    adicionarCestas();
    botaoMenorPreco.classList.add("ativo");
    botaoMaiorPreco.classList.remove("ativo");
}

botaoMaiorPreco.onclick = ordenarMaiorPreco;
botaoMenorPreco.onclick = ordenarMenorPreco;