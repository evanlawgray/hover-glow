// const cards = document.querySelectorAll('.card');

// for (let card of cards) {
//     card.addEventListener('mousemove', (event) => {
//         const { currentTarget: target } = event;

//         const rect = target.getBoundingClientRect(),
//             x = event.clientX - rect.x,
//             y = event.clientY - rect.y;

//         target.style.setProperty('--grad-x', `${x}px`);
//         target.style.setProperty('--grad-y', `${y}px`);
//     });

//     card.addEventListener('mouseleave', (event) => {

//     });
// }

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