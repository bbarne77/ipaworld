// js/section.js

// Находим кнопку с вопросом и меню
const helpBubble = document.querySelector('.help-bubble');
const helpMenu = document.getElementById('helpMenu');

// Находим элементы модального окна
const infoModal = document.getElementById('infoModal');
const infoModalTitle = document.getElementById('infoModalTitle');
const infoModalText = document.getElementById('infoModalText');
const infoModalCloseBtn = document.querySelector('.info-modal-close-btn');

// Находим все кнопки в меню помощи
const helpMenuButtons = document.querySelectorAll('.help-menu-btn');

// Данные для модальных окон
const infoContent = {
    'certificate': {
        title: '🔐 Что такое Сертификат?',
        text: 'Сертификат — это специальное программное обеспечение для вашего iOS-устройства, которое открывает доступ к установке сторонних приложений и игр из альтернативных источников, помимо App Store. Вы можете безопасно загружать нужные вам приложения, не нарушая при этом никаких правил и законов, сохраняя полную безопасность ваших данных и устройства. Это надёжный способ получить больше свободы без риска!'
    },
    'get-certificate': {
        title: 'Как получить Сертификат?',
        text: 'Инструкция по получению сертификата: Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    'scarlet': {
        title: 'Как установить Scarlet?',
        text: 'Инструкция по установке Scarlet: Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.'
    },
    'gbox': {
        title: 'Как установить Gbox?',
        text: 'Инструкция по установке Gbox: Maecenas sed diam eget risus varius blandit sit amet non magna.'
    },
    'esign': {
        title: 'Как установить ESign?',
        text: 'Инструкция по установке ESign: Donec id elit non mi porta gravida at eget metus.'
    }
};

// Функция для отображения модального окна
function showModal(title, text) {
    infoModalTitle.innerHTML = title; // Используем innerHTML для поддержки эмодзи и HTML
    infoModalText.innerHTML = text; // Используем innerHTML для поддержки эмодзи и HTML
    infoModal.style.display = 'block';
}

// Обработчик для кнопки с вопросом
helpBubble.addEventListener('click', () => {
    helpMenu.classList.toggle('show');
});

// Обработчик для кнопок в меню помощи
helpMenuButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        const infoKey = button.getAttribute('data-info');
        if (infoContent[infoKey]) {
            showModal(infoContent[infoKey].title, infoContent[infoKey].text);
            helpMenu.classList.remove('show');
        }
    });
});

// Обработчик для закрытия модального окна по кнопке
infoModalCloseBtn.addEventListener('click', () => {
    infoModal.style.display = 'none';
});

// Скрываем модальное окно при клике вне его
window.addEventListener('click', (event) => {
    if (event.target === infoModal) {
        infoModal.style.display = 'none';
    }
});

// Скрываем меню, если кликнуть где-либо еще
document.addEventListener('click', (event) => {
    const isClickInsideMenu = helpMenu.contains(event.target);
    const isClickOnButton = helpBubble.contains(event.target);
    if (!isClickInsideMenu && !isClickOnButton && helpMenu.classList.contains('show')) {
        helpMenu.classList.remove('show');
    }
});
