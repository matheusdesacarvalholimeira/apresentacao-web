// Seleciona todos os elementos com a classe 'fade-in'
const texts = document.querySelectorAll('.fade-in');

// Função para adicionar a classe 'visible' gradualmente
function animateTexts() {
    texts.forEach((text, index) => {
        setTimeout(() => {
            text.classList.add('visible');
        }, index * 1000); // Atraso de 1 segundo para cada texto
    });
}

// Executa a animação quando a página carrega
window.onload = animateTexts;
