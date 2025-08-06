// js/section.js

// Находим кнопку с вопросом и меню
const helpBubble = document.querySelector('.help-bubble');
const helpMenu = document.getElementById('helpMenu');

// Добавляем обработчик события 'click'
helpBubble.addEventListener('click', () => {
    // Переключаем класс 'show', чтобы показать/скрыть меню
    helpMenu.classList.toggle('show');
});

// Дополнительно: скрываем меню, если кликнуть где-либо еще на странице
document.addEventListener('click', (event) => {
    // Проверяем, был ли клик вне кнопки и вне меню
    const isClickInsideMenu = helpMenu.contains(event.target);
    const isClickOnButton = helpBubble.contains(event.target);

    if (!isClickInsideMenu && !isClickOnButton && helpMenu.classList.contains('show')) {
        helpMenu.classList.remove('show');
    }
});
