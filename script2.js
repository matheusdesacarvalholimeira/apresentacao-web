// Seleciona todas as imagens com a classe 'frase'
const frases = document.querySelectorAll('.frase');
const cursor = document.getElementById('js-cursor');
const cursorBig = document.getElementById('js-cursor__big');

// Função para exibir as imagens com atraso
function distribuirFrases() {
    frases.forEach((frase, index) => {
        setTimeout(() => {
            frase.classList.add('visible');
        }, index * 500); // Atraso de 500ms entre cada imagem
    });
}

// Adiciona o evento de clique para cada imagem
frases.forEach(frase => {
    frase.addEventListener('click', () => {
        frase.classList.toggle('clicked');
    });
});

// Chama a função para distribuir as imagens ao carregar a página
window.onload = distribuirFrases;

// Movimenta o cursor
document.addEventListener('mousemove', (e) => {
    cursor.style.transform = `translate(${e.pageX}px, ${e.pageY}px)`;
});

// Amplia o cursor grande ao passar sobre elementos específicos
document.querySelectorAll('.fade-in').forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursorBig.style.transform = 'translate(-50%, -50%) scale(1)';
    });
    link.addEventListener('mouseleave', () => {
        cursorBig.style.transform = 'translate(-50%, -50%) scale(0)';
    });
});
