// Seleciona todas as frases
const frases = document.querySelectorAll('.frase');

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
 