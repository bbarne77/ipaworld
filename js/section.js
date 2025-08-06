// js/section.js

// Находим кнопку с вопросом и меню
const helpBubble = document.querySelector('.help-bubble');
const helpMenu = document.getElementById('helpMenu');

// Находим элементы модального окна с информацией
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
        text: 'Сертификат — это специальное программное обеспечение для вашего <strong>iOS-устройства</strong>, которое открывает доступ к установке <strong>сторонних приложений и игр</strong> из альтернативных источников, помимо App Store.<br><br>Вы можете <strong>безопасно</strong> загружать нужные вам приложения:<br><ul><li>📲 не нарушая при этом никаких <strong>правил</strong> и <strong>законов</strong>;</li><li>🛡️ сохраняя <strong>полную безопасность</strong> ваших данных и устройства.</li></ul><br>Это надежный способ получить больше свободы без риска!'
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
    infoModalTitle.innerHTML = title;
    infoModalText.innerHTML = text;
    infoModal.classList.add('active'); // Добавляем класс 'active'
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

// Обработчик для закрытия модального окна с информацией
infoModalCloseBtn.addEventListener('click', () => {
    infoModal.classList.remove('active'); // Удаляем класс 'active'
});

// Скрываем модальное окно при клике вне его
window.addEventListener('click', (event) => {
    if (event.target === infoModal) {
        infoModal.classList.remove('active'); // Удаляем класс 'active'
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
