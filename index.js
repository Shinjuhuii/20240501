let cards = document.querySelectorAll('.card')
cards.forEach(card => {
    card.addEventListener('click', function() {
        document.querySelector('.additional-content').style.display = 'block';
    });
});