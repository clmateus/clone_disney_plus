document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('[data-tab-button]');   

    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            const activeButton = document.querySelector(`[data-tab-button=${abaAlvo}]`)

            escondeTodasAbas();
            removeActiveButton();

            aba.classList.add('shows__list--is-active');
            activeButton.classList.add('shows__tabs__button--is-active')
        });
    }
});

function removeActiveButton() {
    const allButtons = document.querySelectorAll('[data-tab-button]');

    for(let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove('shows__tabs__button--is-active')
    }
}

function escondeTodasAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for(i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}