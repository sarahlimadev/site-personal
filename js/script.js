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

formulario.addEventListener('submit', function(event) {
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