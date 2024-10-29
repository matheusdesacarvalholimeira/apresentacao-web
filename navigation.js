// navigation.js
document.addEventListener("keydown", (event) => {
    const pages = ["index.html", "index2.html", "index3.html", "index4.html"];
    const currentPage = window.location.pathname.split("/").pop();
    const currentIndex = pages.indexOf(currentPage);

    if (event.key === "ArrowRight") {
        // Navegar para a próxima página
        const nextIndex = (currentIndex + 1) % pages.length; // Loop de volta ao início
        window.location.href = pages[nextIndex];
    } else if (event.key === "ArrowLeft") {
        // Navegar para a página anterior
        const prevIndex = (currentIndex - 1 + pages.length) % pages.length; // Loop de volta ao final
        window.location.href = pages[prevIndex];
    }
});
