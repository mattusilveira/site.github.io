const carrossel = document.querySelector('.carrossel');
const carrosselImagem = document.querySelector('.carrossel .imagem');

const imagens = [
    'img/carrossel/1.jpg',
    'img/carrossel/2.jpg',
    'img/carrossel/3.jpg',
]

let activeImageCarrossel = 0;

function changeImageCarrossel() {
    if (activeImageCarrossel >= imagens.length) {
        activeImageCarrossel = 0;
    }

    carrosselImagem.style.backgroundImage = `url(${imagens[activeImageCarrossel]})`;

    activeImageCarrossel++;
}

setInterval(changeImageCarrossel, 3000);

const recentes = document.querySelector('.recentes .itens');

const itensRecentes = [{
    imagem: 'img/recentes/bambu da sorte.jpg',
    nome: 'Bambu da Sorte',
    preco: 60,
},
{
    imagem: 'img/recentes/buqueGirassol.jpg',
    nome: 'Buquê Girassol',
    preco: 50,
},
{
    imagem: 'img/recentes/buqueLírio.jpg',
    nome: 'Buquê Lírio',
    preco: 75,
},
{
    imagem: 'img/recentes/buqueMargarida.jpg',
    nome: 'Buquê Margarida',
    preco: 55,
},
{
    imagem: 'img/recentes/buquePersonalizado.jpg',
    nome: 'Buquê Personalizado',
    preco: 70,
},
{
    imagem: 'img/recentes/buqueRosaVermelha.jpg',
    nome: 'Buquê Rosa Vermelha',
    preco: 65,
},
{
    imagem: 'img/recentes/buqueTulipa.jpg',
    nome: 'Buquê Tulipa',
    preco: 80,
}
]

itensRecentes.forEach((item) => {
    recentes.innerHTML += `
    <div class="item">
        <img src="${item.imagem}" alt="${item.nome}">
        <div class="nome">${item.nome}</div>
        <div class="preco">R$ ${item.preco}</div>
    </div>
    `
})

const anteriorRecentes = document.getElementById('anteriorRecentes');
const proximoRecentes = document.getElementById('proximoRecentes');
const itensRecentesDiv = document.querySelectorAll('.recentes .itens .item');

let activeRecentes = 0;

itensRecentesDiv[activeRecentes].scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
itensRecentesDiv[activeRecentes].classList.add('recentesActive');

function changeRecentes(index) {
    if (index < 0) {
        index = itensRecentes.length - 1;
    } else if (index >= itensRecentes.length) {
        index = 0;
    }

    itensRecentesDiv.forEach((item) => {
        item.classList.remove('recentesActive');
    })

    if(index == 0) {
        itensRecentesDiv[index].scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }

    else if (index == itensRecentes.length - 1) {
        itensRecentesDiv[index].scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
    }

    else {
        itensRecentesDiv[activeRecentes].scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
    }

    itensRecentesDiv[index].classList.add('recentesActive');
    

    activeRecentes = index;
}

anteriorRecentes.addEventListener('click', () => {
    changeRecentes(activeRecentes - 1);
})

proximoRecentes.addEventListener('click', () => {
    changeRecentes(activeRecentes + 1);
})