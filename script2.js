// Seleciona todas as frases
const frases = document.querySelectorAll('.frase');
const cursor = document.getElementById('js-cursor');
const cursorBig = document.getElementById('js-cursor__big');

// Aplica posição fixa e exibe as frases gradualmente
function distribuirFrases() {
    frases.forEach((frase, index) => {
        // Exibe a frase com atraso
        setTimeout(() => {
            frase.classList.add('visible');
        }, index * 500); // Atraso para cada frase (500ms entre elas)
    });
}

// Adiciona o evento de clique para cada frase
frases.forEach(frase => {
    frase.addEventListener('click', () => {
        frase.classList.toggle('clicked'); // Alterna a classe "clicked"
    });
});

// Chama a função para distribuir as frases ao carregar a página
window.onload = distribuirFrases;
 

// Função para mover o cursor personalizado
document.addEventListener('mousemove', (e) => {
    cursor.style.transform = `translate(${e.pageX}px, ${e.pageY}px)`;
});

// Função para ampliar o cursor grande ao passar sobre elementos específicos
document.querySelectorAll('.fade-in').forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursorBig.style.transform = 'translate(-50%, -50%) scale(1)'; // Aumenta o círculo grande
    });
    link.addEventListener('mouseleave', () => {
        cursorBig.style.transform = 'translate(-50%, -50%) scale(0)'; // Reduz o círculo grande
    });
});