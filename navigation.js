// Navegação pelo scroll do mouse
document.addEventListener("wheel", (event) => {
    const pages = ["index.html", "index2.html", "index3.html", "index4.html"];
    const currentPage = window.location.pathname.split("/").pop();
    const currentIndex = pages.indexOf(currentPage);

    if (event.deltaY > 0) {
        // Scroll para baixo - próxima página
        const nextIndex = (currentIndex + 1) % pages.length;
        window.location.href = pages[nextIndex];
    } else if (event.deltaY < 0) {
        // Scroll para cima - página anterior
        const prevIndex = (currentIndex - 1 + pages.length) % pages.length;
        window.location.href = pages[prevIndex];
    }
});
