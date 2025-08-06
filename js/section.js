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
    title: 'Инструкция по установке сертификата',
    text: `
        <div class="step-container">
            <div class="step" data-step-id="1">
                <strong>Как получить сертификат в боте.</strong>
                <p>Отправляете <strong>/start</strong> боту. Нажимаете на кнопку "Проверить UDID". После сообщения "Отправьте UDID", вам нужно отправить свой UDID, который вы указывали при оплате сертификата. Нажимаете на кнопку "Получить сертификат [Имя вашего сертификата]". Бот пришлет вам два файла вашего сертификата - <strong>P12</strong> и <strong>Mobileprovision</strong>, а также ссылки для быстрой установки вашего сертификата.</p>
                <div class="step-buttons">
                    <button class="next-step-btn">Следующий шаг</button>
                </div>
            </div>
            <div class="step hidden" data-step-id="2">
                <strong>Как сохранить сертификат на устройство.</strong>
                <p>Когда бот прислал вам два файла сертификата, то вам нужно нажать на один из них. В открывшемся окне нажмите на кнопку, расположенную сверху.</p>
                <img src="https://github.com/viibbee/Info/blob/main/cert1.png?raw=true" alt="Шаг 1">
                <div class="step-buttons">
                    <button class="prev-step-btn">Предыдущий шаг</button>
                    <button class="next-step-btn">Следующий шаг</button>
                </div>
            </div>
            <div class="step hidden" data-step-id="3">
                <p>У вас снова откроется окно, в нем выберите кнопку "Сохранить в файлы". Выберите место для сохранения сертификата.</p>
                <img src="https://github.com/viibbee/Info/blob/main/cert2.png?raw=true" alt="Шаг 2">
                <p>Нажмите на кнопку "Сохранить" слева вверху. Повторите для второго файла сертификата.</p>
                <div class="step-buttons">
                    <button class="prev-step-btn">Предыдущий шаг</button>
                    <button class="close-modal-btn">Закрыть</button>
                </div>
            </div>
        </div>
    `
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
    infoModal.classList.add('active');
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
        console.log(`Нажата кнопка с data-info: ${infoKey}`); // Отладочное сообщение
        if (infoContent[infoKey]) {
            showModal(infoContent[infoKey].title, infoContent[infoKey].text);
            helpMenu.classList.remove('show');
        } else {
            console.error(`Ошибка: Для ключа "${infoKey}" не найдено данных в infoContent.`);
        }
    });
});

// Обработчик для закрытия модального окна с информацией
infoModalCloseBtn.addEventListener('click', () => {
    infoModal.classList.remove('active');
});

// Скрываем модальное окно при клике вне его
window.addEventListener('click', (event) => {
    if (event.target === infoModal) {
        infoModal.classList.remove('active');
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
