let index = 0;
const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel img');

const totalImages = images.length;

// Clona le immagini per creare un carosello infinito
const cloneImages = () => {
    const allImages = Array.from(images);
    allImages.forEach((image) => {
        const clone = image.cloneNode(true);  // Crea una copia dell'immagine
        carousel.appendChild(clone);  // Aggiungi la copia alla fine del carosello
    });
};

// Funzione per scorrere il carosello
function scrollCarousel() {
    if (index >= totalImages) {
        index = 0; // Se raggiungi la fine, torna all'inizio
        carousel.style.transition = "none"; // Disabilita la transizione quando arrivi alla fine
        carousel.style.transform = `translateX(0)`; // Torna alla posizione iniziale
    } else {
        carousel.style.transition = "transform 0.5s ease-in-out"; // Aggiungi transizione per scorrere
        const offset = -index * (images[0].clientWidth + 20); // 20px è la distanza tra le immagini
        carousel.style.transform = `translateX(${offset}px)`; // Muovi il carosello
    }
}

// Avvia il carosello e lo fa scorrere ogni 3 secondi
setInterval(() => {
    index++;
    scrollCarousel();
}, 1000);

// Clona le immagini quando la pagina si carica
window.onload = () => {
    cloneImages();
    scrollCarousel();  // Esegui subito lo scroll
};



