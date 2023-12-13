// Adicionando Imagens do Carrossel

const carrossel = document.querySelector(".carrossel");
const carrosselImagem = document.querySelector(".carrossel .imagem");

const imagens = [
  "img/carrossel/1.jpg",
  "img/carrossel/2.jpg",
  "img/carrossel/3.jpg",
];

// Criando Função para trocar as imagens do carrossel

let activeImageCarrossel = 0;

function changeImageCarrossel() {
  if (activeImageCarrossel >= imagens.length) {
    activeImageCarrossel = 0;
  }

  carrosselImagem.style.backgroundImage = `url(${imagens[activeImageCarrossel]})`;

  activeImageCarrossel++;
}

setInterval(changeImageCarrossel, 3000);

// Adicionando Imagens dos Produtos Recentes

const recentes = document.querySelector(".recentes .itens");

const itensRecentes = [
  {
    imagem: "img/recentes/bambu da sorte.jpg",
    nome: "Bambu da Sorte",
    preco: 60,
  },
  {
    imagem: "img/recentes/buqueGirassol.jpg",
    nome: "Buquê Girassol",
    preco: 50,
  },
  {
    imagem: "img/recentes/buqueLírio.jpg",
    nome: "Buquê Lírio",
    preco: 75,
  },
  {
    imagem: "img/recentes/buqueMargarida.jpg",
    nome: "Buquê Margarida",
    preco: 55,
  },
  {
    imagem: "img/recentes/buquePersonalizado.jpg",
    nome: "Buquê Personalizado",
    preco: 70,
  },
  {
    imagem: "img/recentes/buqueRosaVermelha.jpg",
    nome: "Buquê Rosa Vermelha",
    preco: 65,
  },
  {
    imagem: "img/recentes/buqueTulipa.jpg",
    nome: "Buquê Tulipa",
    preco: 80,
  },
];

itensRecentes.forEach((item) => {
  recentes.innerHTML += `
    <div class="item">
        <img src="${item.imagem}" alt="${item.nome}">
        <div class="nome">${item.nome}</div>
        <div class="preco">R$ ${item.preco}</div>
    </div>
    `;
});

// Criando Função para trocar o produto ativo dos produtos recentes

const anteriorRecentes = document.getElementById("anteriorRecentes");
const proximoRecentes = document.getElementById("proximoRecentes");
const itensRecentesDiv = document.querySelectorAll(".recentes .itens .item");

let activeRecentes = 0;

itensRecentesDiv[activeRecentes].classList.add("recentesActive");

function changeRecentes(index) {
  activeRecentes = index;

  if (index < 0) {
    index = itensRecentes.length - 1;
  } else if (index >= itensRecentes.length) {
    index = 0;
  }

  itensRecentesDiv.forEach((item) => {
    item.classList.remove("recentesActive");
  });

  if (index == 0) {
    itensRecentesDiv[index].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  } else if (index == itensRecentes.length - 1) {
    itensRecentesDiv[index].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "end",
    });
  } else {
    itensRecentesDiv[activeRecentes].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  console.log(activeRecentes);

  itensRecentesDiv[index].classList.add("recentesActive");
}

anteriorRecentes.addEventListener("click", () => {
  changeRecentes(activeRecentes - 1);
});

proximoRecentes.addEventListener("click", () => {
  changeRecentes(activeRecentes + 1);
});

// Adicionando Imagens dos Produtos Mais Vendidos

const maisVendidos = document.querySelector(".maisVendidos .itens");

const itensMaisVendidos = [
  {
    imagem: "img/recentes/buquePersonalizado.jpg",
    nome: "Buquê Personalizado",
    preco: 70,
  },
  {
    imagem: "img/recentes/buqueGirassol.jpg",
    nome: "Buquê Girassol",
    preco: 50,
  },
  {
    imagem: "img/recentes/bambu da sorte.jpg",
    nome: "Bambu da Sorte",
    preco: 60,
  },
  {
    imagem: "img/recentes/buqueLírio.jpg",
    nome: "Buquê Lírio",
    preco: 75,
  },
  {
    imagem: "img/recentes/buqueTulipa.jpg",
    nome: "Buquê Tulipa",
    preco: 80,
  },
  {
    imagem: "img/recentes/buqueMargarida.jpg",
    nome: "Buquê Margarida",
    preco: 55,
  },

  {
    imagem: "img/recentes/buqueRosaVermelha.jpg",
    nome: "Buquê Rosa Vermelha",
    preco: 65,
  },
];

itensMaisVendidos.forEach((item) => {
  maisVendidos.innerHTML += `
    <div class="item">
        <img src="${item.imagem}" alt="${item.nome}">
        <div class="nome">${item.nome}</div>
        <div class="preco">R$ ${item.preco}</div>
    </div>
    `;
});

// Criando Função para trocar o produto ativo dos produtos mais vendidos

const anteriorMaisVendidos = document.getElementById("anteriorMaisVendidos");
const proximoMaisVendidos = document.getElementById("proximoMaisVendidos");
const itensMaisVendidosDiv = document.querySelectorAll(
  ".maisVendidos .itens .item"
);

let activeMaisVendidos = 0;

itensMaisVendidosDiv[activeMaisVendidos].classList.add("maisVendidosActive");

function changeMaisVendidos(index) {
  activeMaisVendidos = index;

  if (index < 0) {
    index = itensMaisVendidos.length - 1;
  } else if (index >= itensMaisVendidos.length) {
    index = 0;
  }

  itensMaisVendidosDiv.forEach((item) => {
    item.classList.remove("maisVendidosActive");
  });

  if (index == 0) {
    itensMaisVendidosDiv[index].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  } else if (index == itensMaisVendidos.length - 1) {
    itensMaisVendidosDiv[index].scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  } else {
    itensMaisVendidosDiv[activeMaisVendidos].scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  }

  console.log(activeMaisVendidos);

  itensMaisVendidosDiv[index].classList.add("maisVendidosActive");
}

anteriorMaisVendidos.addEventListener("click", () => {
  changeMaisVendidos(activeMaisVendidos - 1);
});

proximoMaisVendidos.addEventListener("click", () => {
  changeMaisVendidos(activeMaisVendidos + 1);
});
