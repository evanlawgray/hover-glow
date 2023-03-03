const cardsContainer = document.querySelector('.cards');

cardsContainer.addEventListener('mousemove', (e) => {
    for (let card of document.getElementsByClassName('card')) {
        const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.x,
            y = e.clientY - rect.y;

        card.style.setProperty('--grad-x', `${x}px`);
        card.style.setProperty('--grad-y', `${y}px`);
    }
});