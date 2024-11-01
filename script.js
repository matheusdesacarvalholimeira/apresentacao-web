// Seleciona todos os elementos com a classe 'fade-in'
const fadeElements = document.querySelectorAll('.fade-in');

// Função para adicionar a classe 'visible' gradualmente
function animateElements() {
    fadeElements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('visible');
        }, index * 1000); // Atraso de 1 segundo para cada elemento
    });
}

// Executa a animação quando a página carrega
window.onload = animateElements;

/* Código para o cursor customizado */
const cursor = document.getElementById('js-cursor');
const cursorBig = document.getElementById('js-cursor__big');

// Função para mover o cursor personalizado
document.addEventListener('mousemove', (e) => {
    cursor.style.transform = `translate(${e.pageX}px, ${e.pageY}px)`;
});

// Função para ampliar o cursor grande ao passar sobre a imagem
const image = document.querySelector('.central-image');
image.addEventListener('mouseenter', () => {
    cursorBig.style.transform = 'scale(1)';
});
image.addEventListener('mouseleave', () => {
    cursorBig.style.transform = 'scale(0)';
});
