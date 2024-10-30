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

/* Código para o cursor customizado */
const cursor = document.getElementById('js-cursor');
const cursorBig = document.getElementById('js-cursor__big');

// Função para mover o cursor personalizado
document.addEventListener('mousemove', (e) => {
    cursor.style.transform = `translate(${e.pageX}px, ${e.pageY}px)`;
});

// Função para ampliar o cursor grande ao passar sobre elementos específicos
document.querySelectorAll('.fade-in').forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursorBig.style.transform = 'scale(1)';
    });
    link.addEventListener('mouseleave', () => {
        cursorBig.style.transform = 'scale(0)';
    });
});
