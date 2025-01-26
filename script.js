const atlete = [
    { nome: "Amato Azzurra", eta: 15, paese: "Almese", img: "img/azzurra.jpg", info: "1" },
    { nome: "Carraro Chiara", eta: 14, paese: "Bruino", img: "img/Chiara.jpg", info: "2"},
    { nome: "Colombo Camilla", eta: 19, paese: "Sangano", img: "img/Camilla.jpg", info: "1" },
    { nome: "Cusano Giulia", eta: 15, paese: "Sangano", img: "img/giulia 1.jpg", info: "18"},
    { nome: "Latella Marta", eta: 15, paese: "Sangano", img: "img/Marta.jpg", info: "1"},
    { nome: "Maritano Beatrice", eta: 17, paese: "Sangano", img: "img/beatrice.jpg", info: "1" },
    { nome: "Motta Costanza", eta: 14, paese: "Sangano", img: "img/Costanza.jpg", info: "3" },
    { nome: "Motta Maria", eta: 20, paese: "Sangano", img: "img/maria.jpg", info: "2" },
    { nome: "Savantlevra Virginia", eta: 23, paese: "Ciriè", img: "img/Virginia.jpg", info: "0" },
    { nome: "Trono Teresa", eta: 19, paese: "Sangano", img: "img/Teresa.jpg", info: "9" },
    { nome: "Trono Viviana", eta: 23, paese: "Sangano", img: "img/viviana 1.jpg", info: "16" },
    { nome: "Zay Sara", eta: 17, paese: "Villarbasse", img: "img/sara 6.jpg", info: "10" }
];

// Popolamento della griglia con le carte degli atleti
const atleteGrid = document.querySelector('.atlete-grid');

atlete.forEach(atleta => {
    const atletaCard = document.createElement('div');
    atletaCard.classList.add('atleta-card');
    atletaCard.innerHTML = `
        <img src="${atleta.img}" alt="Foto ${atleta.nome}">
        <div class="atleta-info">
            <h3>${atleta.nome}</h3>
            <p>${atleta.paese}</p>
        </div>
    `;
    atletaCard.addEventListener('click', () => openModal(atleta));
    atleteGrid.appendChild(atletaCard);
});

// Modal
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('close');
const modalImg = document.getElementById('modal-img');
const modalName = document.getElementById('modal-name');
const modalAge = document.getElementById('modal-age');
const modalCountry = document.getElementById('modal-country');
const modalInfo = document.getElementById('modal-ciao');

function openModal(atleta) {
    modal.style.display = 'flex';
    modalImg.src = atleta.img;
    modalName.textContent = atleta.nome;
    modalAge.textContent = `Età: ${atleta.eta} anni`;
    modalCountry.textContent = `Paese: ${atleta.paese}`;
    modalInfo.textContent = `Esperienze da Schiava: ${atleta.info}`;
}

// Chiudere il modal cliccando sul pulsante
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Chiudere il modal cliccando fuori dal modal
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Chiudere il modal premendo il tasto ESC
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        modal.style.display = 'none';
    }
});
