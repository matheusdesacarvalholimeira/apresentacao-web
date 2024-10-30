const cursor = document.getElementById('js-cursor');
const cursorBig = document.getElementById('js-cursor__big');

// Função para aplicar a classe que faz o efeito fade-in
window.onload = function() {
    const image = document.getElementById("image");
    image.classList.add("show");
};


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