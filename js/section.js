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
    },
   // ⚠️ Обновлено под ваш текст + кнопка Пользовательского соглашения
'warranty': {
    title: '⚠️ Гарантия',
    text: `
        <p>Наш магазин предоставляет гарантию на все сертификаты:</p>
        <ul>
            <li><strong>Обычный сертификат:</strong> 3 месяца</li>
            <li><strong>Моментальный сертификат:</strong> 3 месяца</li>
            <li><strong>Супермоментальный сертификат:</strong> 6 месяцев</li>
            <li><strong>Парный сертификат:</strong> 3 месяца</li>
            <li><strong>Сертификат IPAD:</strong> 1 месяц</li>
        </ul>

        <p><em>Данные условия гарантии вступают в силу с 01.04.2026 г.</em></p>

        <p>
            Возврат или частичное возмещение каких-либо сборов, уплаченных по настоящему Соглашению,
            или любых других сборов не будет производиться ни по какой причине.
            Читайте наше пользовательское соглашение!
        </p>

        <p>
            <strong>Внимание:</strong> При ошибочном выборе и оплате сертификата возврат средств невозможен.
            Пожалуйста, будьте внимательны при оформлении заказа.
        </p>

        <a href="https://teletype.in/@bbarne77/3x38UdfRftp" target="_blank" rel="noopener"
           class="modal-btn confirm-btn" style="display:block; text-align:center; margin-top:12px;">
           Пользовательское соглашение
        </a>
    `
}
};

// Функция для инициализации пошаговой навигации
function setupStepNavigation() {
    const steps = infoModal.querySelectorAll('.step');
    let currentStep = 0;

    function showStep(stepIndex) {
        steps.forEach((step, index) => {
            if (index === stepIndex) {
                step.classList.remove('hidden');
            } else {
                step.classList.add('hidden');
            }
        });
    }

    // Добавляем обработчик событий на всё модальное окно, чтобы ловить клики по кнопкам
    infoModal.addEventListener('click', (e) => {
        if (e.target.classList.contains('next-step-btn')) {
            if (currentStep < steps.length - 1) {
                currentStep++;
                showStep(currentStep);
            }
        } else if (e.target.classList.contains('prev-step-btn')) {
            if (currentStep > 0) {
                currentStep--;
                showStep(currentStep);
            }
        } else if (e.target.classList.contains('close-modal-btn')) {
            infoModal.classList.remove('active');
            // При закрытии сбрасываем шаг на первый
            currentStep = 0;
            showStep(currentStep);
        }
    });

    // Показываем первый шаг при открытии
    showStep(currentStep);
}


// Функция для отображения модального окна
function showModal(title, text, infoKey) {
    infoModalTitle.innerHTML = title;
    infoModalText.innerHTML = text;
    infoModal.classList.add('active');

    // Если это модальное окно с инструкцией по сертификату, запускаем пошаговую навигацию
    if (infoKey === 'get-certificate') {
        setupStepNavigation();
    }
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
        console.log(`Нажата кнопка с data-info: ${infoKey}`);
        if (infoContent[infoKey]) {
            showModal(infoContent[infoKey].title, infoContent[infoKey].text, infoKey);
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


// 🔥 ОБНОВЛЕННАЯ ЛОГИКА ДЛЯ ПОДТВЕРЖДЕНИЯ ЗАКАЗА 🔥

// Находим все кнопки "Купить"
const buyButtons = document.querySelectorAll('.card-btn');

// Находим модальное окно подтверждения и его элементы
const buyModal = document.getElementById('buyModal');
const buyModalTitle = buyModal.querySelector('.modal-title');
const buyModalDescription = buyModal.querySelector('.modal-description');
const buyModalCloseBtn = buyModal.querySelector('.close-btn');
const buyModalCancelBtn = buyModal.querySelector('.cancel-btn');
const confirmBtn = buyModal.querySelector('.confirm-btn'); // Добавляем переменную для кнопки "Подтвердить"

// Открываем модальное окно при клике на "Купить"
buyButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault(); // Предотвращаем переход по ссылке

        // Получаем данные из атрибутов кнопки
        const title = button.getAttribute('data-title');
        const description = button.getAttribute('data-description');
        const link = button.getAttribute('data-link'); // Получаем новую ссылку

        // Вставляем данные в модальное окно
        buyModalTitle.textContent = title;
        buyModalDescription.textContent = description;
        confirmBtn.href = link; // Устанавливаем ссылку для кнопки "Подтвердить"

        // Показываем модальное окно
        buyModal.classList.add('active');
    });
});

// Закрываем модальное окно при клике на крестик
buyModalCloseBtn.addEventListener('click', () => {
    buyModal.classList.remove('active');
});

// Закрываем модальное окно при клике на "Отмена"
buyModalCancelBtn.addEventListener('click', () => {
    buyModal.classList.remove('active');
});

// Закрываем модальное окно при клике вне его
window.addEventListener('click', (e) => {
    if (e.target == buyModal) {
        buyModal.classList.remove('active');
    }
});

// === КНОПКА "Гарантия" под каналом и отзывами ===
// (в HTML должна быть кнопка: <button id="openWarrantyBtn" class="info-btn">Гарантия</button>)
const openWarrantyBtn = document.getElementById('openWarrantyBtn');
if (openWarrantyBtn) {
    openWarrantyBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const c = infoContent['warranty'];
        showModal(c.title, c.text, 'warranty');
    });
}
