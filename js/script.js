const btnMenu = document.querySelector('.btn-menu-mobile');
const menu = document.querySelector('.menu');

btnMenu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
});

const linksMenu = document.querySelectorAll('.menu a');
linksMenu.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('ativo');
    });
});

const formulario = document.querySelector('form');

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const whatsapp = document.getElementById('whatsapp').value;
    const objetivo = document.getElementById('objetivo').value;
    const plano = document.getElementById('plano').value;
    const mensagem = document.getElementById('mensagem').value;

    if (nome === '' || whatsapp === '' || plano === '') {
        alert('Por favor, preencha os campos obrigatórios (Nome, WhatsApp e Plano).');
        return;
    }

    let textoMensagem = `Olá, Anderson! Meu nome é ${nome}.%0A`;
    textoMensagem += `Tenho interesse no serviço de: *${plano}*.%0A`;
    textoMensagem += `Meu objetivo principal é: ${objetivo}.%0A`;

    if (mensagem !== '') {
        textoMensagem += `%0AObservação: ${mensagem}%0A`;
    }

    const numeroPersonal = '5581985629559';
    const linkWhatsApp = `https://wa.me/${numeroPersonal}?text=${textoMensagem}`;

    window.open(linkWhatsApp, '_blank');
});

const trilho = document.querySelector('.slider-trilho');
const slides = document.querySelectorAll('.item-alunos');
const btnProx = document.querySelector('.seta-direita');
const btnAnt = document.querySelector('.seta-esquerda');

let index = 0;

function atualizarSlider() {
    const larguraCard = slides[0].getBoundingClientRect().width + 20;
    trilho.style.transform = `translateX(${-index * larguraCard}px)`;
}

btnProx.addEventListener('click', () => {
    const cardsVisiveis = window.innerWidth > 1024 ? 3 : (window.innerWidth > 768 ? 2 : 1);
    
    index++;
    if (index > slides.length - cardsVisiveis) {
        index = 0;
    }
    atualizarSlider();
});

btnAnt.addEventListener('click', () => {
    const cardsVisiveis = window.innerWidth > 1024 ? 3 : (window.innerWidth > 768 ? 2 : 1);
    
    index--;
    if (index < 0) {
        index = slides.length - cardsVisiveis;
    }
    atualizarSlider();
});

window.addEventListener('resize', atualizarSlider);

const trilhoDepo = document.querySelector('.trilho-depoimentos');
const itensDepo = document.querySelectorAll('.item-depoimento');
const btnProxDepo = document.querySelector('.seta-dir');
const btnAntDepo = document.querySelector('.seta-esq');

let indexDepo = 0;

function moverSliderDepo() {
    trilhoDepo.style.transform = `translateX(${-indexDepo * 100}%)`;
}

btnProxDepo.addEventListener('click', () => {
    indexDepo++;
    if (indexDepo >= itensDepo.length) indexDepo = 0;
    moverSliderDepo();
});

btnAntDepo.addEventListener('click', () => {
    indexDepo--;
    if (indexDepo < 0) indexDepo = itensDepo.length - 1;
    moverSliderDepo();
});

setInterval(() => {
    btnProxDepo.click();
}, 7000);