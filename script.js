// Mudar estilo do cabeçalho ao rolar a página
const cabecalho = document.getElementById('cabecalho');

window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
        cabecalho.style.background = 'rgba(5, 8, 22, 0.97)';
        cabecalho.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)';
    } else {
        cabecalho.style.background = 'rgba(5, 8, 22, 0.85)';
        cabecalho.style.boxShadow = 'none';
    }
});

// Rolagem suave para os links do menu
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const destino = document.querySelector(this.getAttribute('href'));
        if (destino) {
            destino.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Enviar formulário diretamente para o WhatsApp
document.getElementById('form-whatsapp').addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const aparelho = document.getElementById('aparelho').value;
    const defeito = document.getElementById('defeito').value;

    const mensagem = `*Nova solicitação de atendimento*%0A%0A` +
                     `*Nome:* ${nome}%0A` +
                     `*Telefone:* ${telefone}%0A` +
                     `*Aparelho/Modelo:* ${aparelho}%0A` +
                     `*Descrição do defeito:*%0A${defeito}`;

    const numero = '5533997003179';
    const link = `https://wa.me/${numero}?text=${mensagem}`;

    window.open(link, '_blank');
});