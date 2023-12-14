// Adicionando as flores

const sectionFlores = document.querySelector(".flores");

const flores = [
    {"imagem": "../../img/flores/rosa.jpeg", "nome": "Rosa", "preco": 10.99},
    {"imagem": "../../img/flores/tulipas.webp", "nome": "Tulipa", "preco": 8.50},
    {"imagem": "../../img/flores/lirio.webp", "nome": "Lírio", "preco": 12.75},
    {"imagem": "../../img/flores/orquideas.webp", "nome": "Orquídea", "preco": 15.99},
    {"imagem": "../../img/flores/girassol.webp", "nome": "Girassol", "preco": 7.25},
    {"imagem": "../../img/flores/cravo.jpeg", "nome": "Cravo", "preco": 9.99},
    {"imagem": "../../img/flores/margaridas.png", "nome": "Margarida", "preco": 6.50},
    {"imagem": "../../img/flores/lavanda.jpeg", "nome": "Lavanda", "preco": 11.25},
    {"imagem": "../../img/flores/hortensias.jpg", "nome": "Hortênsia", "preco": 14.75},
    {"imagem": "../../img/flores/gerbera.jpg", "nome": "Gérbera", "preco": 8.99},
    {"imagem": "../../img/flores/iris.jpg", "nome": "Íris", "preco": 10.50},
    {"imagem": "../../img/flores/dalia.webp", "nome": "Dália", "preco": 13.25},
    {"imagem": "../../img/flores/azaleia.jpg", "nome": "Azaleia", "preco": 9.75},
    {"imagem": "../../img/flores/cravina.jpeg", "nome": "Cravina", "preco": 7.99},
    {"imagem": "../../img/flores/jasmim.webp", "nome": "Jasmim", "preco": 12.50},
    {"imagem": "../../img/flores/camelia.webp", "nome": "Camélia", "preco": 11.99},
    {"imagem": "../../img/flores/calendula.avif", "nome": "Calêndula", "preco": 6.99},
    {"imagem": "../../img/flores/begonia.jpeg", "nome": "Begônia", "preco": 10.25},
    {"imagem": "../../img/flores/anturio.jpg", "nome": "Antúrio", "preco": 14.50},
    {"imagem": "../../img/flores/peonia.webp", "nome": "Peônia", "preco": 16.75}
]

function adicionarFlores() {
    flores.forEach((item) => {
        sectionFlores.innerHTML += `
        <div class="item">
            <img src="${item.imagem}" alt="${item.nome}">
            <div class="nome">${item.nome}</div>
            <div class="preco">R$ ${Number(item.preco).toFixed(2)}</div>
        </div>
        `;
    })
}

adicionarFlores();

// Funções de ordenação

const botaoMaiorPreco = document.querySelector("#maiorPreco");
const botaoMenorPreco = document.querySelector("#menorPreco");

function ordenarMaiorPreco() {
    flores.sort((a, b) => {
        return b.preco - a.preco;
    })
    sectionFlores.innerHTML = "";
    adicionarFlores();
    botaoMaiorPreco.classList.add("ativo");
    botaoMenorPreco.classList.remove("ativo");
}

function ordenarMenorPreco() {
    flores.sort((a, b) => {
        return a.preco - b.preco;
    })
    sectionFlores.innerHTML = "";
    adicionarFlores();
    botaoMenorPreco.classList.add("ativo");
    botaoMaiorPreco.classList.remove("ativo");
}

botaoMaiorPreco.onclick = ordenarMaiorPreco;
botaoMenorPreco.onclick = ordenarMenorPreco;