function openModal(type) {
    const modal = document.getElementById('instructionModal');
    const content = document.getElementById('instructionContent');
    let html = '';

    if (type === 'mainInstruction') {
        html = `
            <h2>Инструкция по установке сертификата</h2>
            <h3>Пункт 1: Как получить сертификат в боте.</h3>
            <ol>
                <li>Отправляете /start боту.</li>
                <li>Нажимаете на кнопку "Проверить UDID".</li>
                <li>После сообщения "Отправьте UDID", вам нужно отправить свой UDID, который вы указывали при оплате сертификата.</li>
                <li>Нажимаете на кнопку "Получить сертификат [Имя вашего сертификата]".</li>
                <li>Бот пришлет вам два файла вашего сертификата - P12 и Mobileprovision, а также ссылки для быстрой установки вашего сертификата.</li>
            </ol>

            <h3>Пункт 2: Как сохранить сертификат на устройство.</h3>
            <ol>
                <li>Когда бот прислал вам два файла сертификата, то вам нужно нажать на один из них.</li>
                <img src="https://github.com/viibbee/Info/blob/main/cert1.png?raw=true" alt="Шаг 1" style="width:100%; border-radius:8px; margin-top:10px;">
                <li>В открывшемся окне нажмите на кнопку, расположенную сверху.</li>
                <img src="https://github.com/viibbee/Info/blob/main/cert2.png?raw=true" alt="Шаг 2" style="width:100%; border-radius:8px; margin-top:10px;">
                <li>У вас снова откроется окно, в нем выберите кнопку "Сохранить в файлы".</li>
                <li>Выберите место для сохранения сертификата.</li>
                <li>Нажмите на кнопку "Сохранить" слева вверху.</li>
                <li>Повторите для второго файла сертификата.</li>
            </ol>

            <h3>Пункт 3: Как скачать Scarlet/Esign/GBox через бота.</h3>
            <ol>
                <li>После отправки UDID бот выдает ссылки на установщики приложений.</li>
                <img src="https://github.com/viibbee/Info/blob/main/cert3.png?raw=true" alt="Шаг 1" style="width:100%; border-radius:8px; margin-top:10px;">
                <li>Нажмите на выбранный установщик.</li>
                <li>Запустится мини-приложение, нажмите "Установить /Install".</li>
                <li>Далее вас перенесет в Safari.</li>
                <li>В Safari появится окно установки приложения.</li>
                <img src="https://github.com/viibbee/Info/blob/main/cert4.png?raw=true" alt="Шаг 5" style="width:100%; border-radius:8px; margin-top:10px;">
                <li>Нажмите кнопку "Установить".</li>
                <li>На рабочем столе начнется загрузка приложения.</li>
                <li>Ожидайте окончания установки.</li>
            </ol>

            <h3>Пункт 4: Требуется режим разработчика.</h3>
            <ol>
                <img src="https://github.com/viibbee/Info/blob/main/cert5.png?raw=true" alt="Шаг 5" style="width:100%; border-radius:8px; margin-top:10px;">
                <li>Откройте настройки устройства.</li>
                <li>Найдите раздел "Конфиденциальность и безопасность".</li>
                <li>Пролистайте вниз и выберите "Режим разработчика".</li>
                <li>Включите ползунок.</li>
                <li>Подтвердите перезагрузку устройства.</li>
                <li>Следуйте дальнейшим инструкциям на экране.</li>
            </ol>
        `;
    } else if (type === 'scarlet') {
        html = `
            <h2>Установка сертификата в Scarlet</h2>
            <ol>
                <li>Зайдите в Scarlet и убедитесь, что вы находитесь на вкладке «Установлено».</li>
                <img src="https://github.com/viibbee/Info/blob/main/scarlet1.png?raw=true" alt="Шаг 1" style="width:100%; border-radius:8px; margin-top:10px;">
                <li>Оставшись на данной вкладке, нажмите на пару секунд кнопку, расположенную сверху справа.</li>
                <img src="https://github.com/viibbee/Info/blob/main/scarlet2.png?raw=true" alt="Шаг 2" style="width:100%; border-radius:8px; margin-top:10px;">
                <li>В появившемся списке нажмите на "Manage Certs".</li>
                <img src="https://github.com/viibbee/Info/blob/main/scarlet3.png?raw=true" alt="Шаг 3" style="width:100%; border-radius:8px; margin-top:10px;">
                <li>В появившемся окне нажмите на "Import Cert".</li>
                <img src="https://github.com/viibbee/Info/blob/main/scarlet4.png?raw=true" alt="Шаг 4" style="width:100%; border-radius:8px; margin-top:10px;">
                <li>Файлы устройства откроются автоматически, остается лишь выбрать файл сертификата, начнем с выбора .p12 <strong>[Нажмите на файл]</strong>.</li>
                <img src="https://github.com/viibbee/Info/blob/main/scarlet5.png?raw=true" alt="Шаг 5" style="width:100%; border-radius:8px; margin-top:10px;">
                <li>Файлы устройства откроются автоматически, остается лишь выбрать последний файл для импорта сертификата .mobileprovision <strong>[Нажмите на файл]</strong>.</li>
                <img src="https://github.com/viibbee/Info/blob/main/scarlet6.png?raw=true" alt="Шаг 6" style="width:100%; border-radius:8px; margin-top:10px;">
                <li>Введите пароль от сертификата и нажмите "Import".</li>
                <img src="https://github.com/viibbee/Info/blob/main/scarlet7.png?raw=true" alt="Шаг 7" style="width:100%; border-radius:8px; margin-top:10px;">
                <li>Нажмите на импортированный сертификат, чтобы кружок слева от названия сертификата был зеленого цвета.</li>
                <img src="https://github.com/viibbee/Info/blob/main/scarlet8.png?raw=true" alt="Шаг 8" style="width:100%; border-radius:8px; margin-top:10px;">
            </ol>
        `;
    } else if (type === 'gbox') {
        html = `
            <h2>Установка сертификата в GBox</h2>
            <ol>
                <li>Зайдите в GBox и убедитесь, что вы находитесь на вкладке "Settings".</li>
                <img src="https://github.com/viibbee/Info/blob/main/gbox1.png?raw=true" alt="Шаг 1" style="width:100%; border-radius:8px; margin-top:10px;">
                <li>Оставшись на данной вкладке, нажмите на "Certificate Management".</li>
                <img src="https://github.com/viibbee/Info/blob/main/gbox2.png?raw=true" alt="Шаг 2" style="width:100%; border-radius:8px; margin-top:10px;">
                <li>В появившемся окне нажмите на "Import Certificate".</li>
                <img src="https://github.com/viibbee/Info/blob/main/gbox3.png?raw=true" alt="Шаг 3" style="width:100%; border-radius:8px; margin-top:10px;">
                <li>В появившемся списке нажмите на "Import p12 Certificate".</li>
                <img src="https://github.com/viibbee/Info/blob/main/gbox4.png?raw=true" alt="Шаг 4" style="width:100%; border-radius:8px; margin-top:10px;">
                <li>Файлы устройства откроются автоматически, остается лишь выбрать файл сертификата, начнем с выбора .p12 (нажмите на файл).</li>
                <img src="https://github.com/viibbee/Info/blob/main/gbox5.png?raw=true" alt="Шаг 5" style="width:100%; border-radius:8px; margin-top:10px;">
                <li>Введите пароль от сертификата и нажмите "Confirm".</li>
                <img src="https://github.com/viibbee/Info/blob/main/gbox6.png?raw=true" alt="Шаг 6" style="width:100%; border-radius:8px; margin-top:10px;">
                <li>В появившемся окне об успешном импорте нажмите на "Okay".</li>
                <img src="https://github.com/viibbee/Info/blob/main/gbox7.png?raw=true" alt="Шаг 7" style="width:100%; border-radius:8px; margin-top:10px;">
                <li>После выбора первого необходимого файла для импорта сертификата, снова нажмите на "Certificate Management".</li>
                <img src="https://github.com/viibbee/Info/blob/main/gbox8.png?raw=true" alt="Шаг 8" style="width:100%; border-radius:8px; margin-top:10px;">
                <li>В появившемся списке нажмите на "Import mobileprovision File".</li>
                <img src="https://github.com/viibbee/Info/blob/main/gbox9.png?raw=true" alt="Шаг 9" style="width:100%; border-radius:8px; margin-top:10px;">
                <li>Файлы устройства откроются автоматически, остается лишь выбрать последний файл для импорта сертификата .mobileprovision (нажмите на файл).</li>
                <img src="https://github.com/viibbee/Info/blob/main/gbox10.png?raw=true" alt="Шаг 10" style="width:100%; border-radius:8px; margin-top:10px;">
                <li>Необходимо убедиться, что в появившемся окне присутствует импортированный сертификат.</li>
                <img src="https://github.com/viibbee/Info/blob/main/gbox11.png?raw=true" alt="Шаг 11" style="width:100%; border-radius:8px; margin-top:10px;">
            </ol>
        `;
    } else if (type === 'esign') {
        html = `
            <h2>Установка сертификата в ESign</h2>
            <ol>
                <li>Зайдите в ESign и убедитесь, что вы находитесь на вкладке "File".</li>
                <img src="https://github.com/viibbee/Info/blob/main/esign1.png?raw=true" alt="Шаг 1" style="width:100%; border-radius:8px; margin-top:10px;">
                <li>Оставшись на данной вкладке, нажмите на "•••" сверху справа.</li>
                <img src="https://github.com/viibbee/Info/blob/main/esign2.png?raw=true" alt="Шаг 2" style="width:100%; border-radius:8px; margin-top:10px;">
                <li>В появившемся списке нажмите на "Import".</li>
                <img src="https://github.com/viibbee/Info/blob/main/esign3.png?raw=true" alt="Шаг 3" style="width:100%; border-radius:8px; margin-top:10px;">
                <li>Файлы устройства откроются автоматически, остается лишь выбрать файл сертификата, начнем с выбора .p12 (нажмите на файл).</li>
                <img src="https://github.com/viibbee/Info/blob/main/esign4.png?raw=true" alt="Шаг 4" style="width:100%; border-radius:8px; margin-top:10px;">
                <li>После выбора первого необходимого файла для импорта сертификата, снова нажмите на "•••".</li>
                <img src="https://github.com/viibbee/Info/blob/main/esign5.png?raw=true" alt="Шаг 5" style="width:100%; border-radius:8px; margin-top:10px;">
                <li>В появившемся списке нажмите на "Import".</li>
                <img src="https://github.com/viibbee/Info/blob/main/esign6.png?raw=true" alt="Шаг 6" style="width:100%; border-radius:8px; margin-top:10px;">
                <li>Файлы устройства откроются автоматически, остается лишь выбрать последний файл для импорта сертификата .mobileprovision (нажмите на файл).</li>
                <img src="https://github.com/viibbee/Info/blob/main/esign7.png?raw=true" alt="Шаг 7" style="width:100%; border-radius:8px; margin-top:10px;">
                <li>После выбора последнего необходимого файла для импорта сертификата, нажмите на файл .p12.</li>
                <img src="https://github.com/viibbee/Info/blob/main/esign8.png?raw=true" alt="Шаг 8" style="width:100%; border-radius:8px; margin-top:10px;">
                <li>В появившемся списке нажмите на "Import Certificate Management".</li>
                <img src="https://github.com/viibbee/Info/blob/main/esign9.png?raw=true" alt="Шаг 9" style="width:100%; border-radius:8px; margin-top:10px;">
                <li>Введите пароль от сертификата и нажмите "OK".</li>
                <img src="https://github.com/viibbee/Info/blob/main/esign10.png?raw=true" alt="Шаг 10" style="width:100%; border-radius:8px; margin-top:10px;">
                <li>Необходимо убедиться, что сертификат был импортирован успешно, для этого перейдите на вкладку "Settings".</li>
                <img src="https://github.com/viibbee/Info/blob/main/esign11.png?raw=true" alt="Шаг 11" style="width:100%; border-radius:8px; margin-top:10px;">
                <li>На данной вкладке нажмите на "Certificate Management".</li>
                <img src="https://github.com/viibbee/Info/blob/main/esign12.png?raw=true" alt="Шаг 12" style="width:100%; border-radius:8px; margin-top:10px;">
                <li>Необходимо убедиться, что в появившемся окне присутствует импортированный сертификат.</li>
                <img src="https://github.com/viibbee/Info/blob/main/esign13.png?raw=true" alt="Шаг 13" style="width:100%; border-radius:8px; margin-top:10px;">
            </ol>
        `;
    }
    
    // ========================================================== //
    // =========== НОВЫЕ ИНСТРУКЦИИ ДЛЯ УСТАНОВКИ IPA =========== //
    // ========================================================== //
    
    else if (type === 'scarlet-install') {
        html = `
            <h2>Установка приложений через Scarlet</h2>
            <ol>
                <li>Зайдите в Scarlet и убедитесь, что вы находитесь на вкладке "Installed"</li>
                <img src="https://github.com/viibbee/Info/blob/main/scarletapp1.png?raw=true" alt="Шаг 1" style="width:100%; border-radius:8px; margin-top:10px;">
                
                <li>Оставшись на данной вкладке, нажмите на кнопку, которая располагается сверху справа</li>
                <img src="https://github.com/viibbee/Info/blob/main/scarletapp2.png?raw=true" alt="Шаг 2" style="width:100%; border-radius:8px; margin-top:10px;">
                
                <li>Файлы устройства откроются автоматически, остается лишь выбрать файл приложения [Нажмите на файл]</li>
                <img src="https://github.com/viibbee/Info/blob/main/scarletapp3.png?raw=true" alt="Шаг 3" style="width:100%; border-radius:8px; margin-top:10px;">
                
                <li>Дождитесь окончания подписи файла</li>
                <img src="https://github.com/viibbee/Info/blob/main/scarletapp4.png?raw=true" alt="Шаг 4" style="width:100%; border-radius:8px; margin-top:10px;">
                
                <li>Появится окно с предложением по установке приложения на ваше устройство, нажмите на "Install"</li>
                <img src="https://github.com/viibbee/Info/blob/main/scarletapp5.png?raw=true" alt="Шаг 5" style="width:100%; border-radius:8px; margin-top:10px;">
            </ol>
        `;
    } else if (type === 'gbox-install') {
        html = `
            <h2>Установка приложений через GBox</h2>
            <ol>
                <li>Зайдите в GBox и убедитесь, что вы находитесь на вкладке "Files"</li>
                <img src="https://github.com/viibbee/Info/blob/main/gboxapp1.png?raw=true" alt="Шаг 1" style="width:100%; border-radius:8px; margin-top:10px;">
                
                <li>Оставшись на данной вкладке, нажмите на кнопку менеджера файлов сверху справа</li>
                <img src="https://github.com/viibbee/Info/blob/main/gboxapp2.png?raw=true" alt="Шаг 2" style="width:100%; border-radius:8px; margin-top:10px;">
                
                <li>Файлы устройства откроются автоматически, остается лишь выбрать файл приложения [Нажмите на файл]</li>
                <img src="https://github.com/viibbee/Info/blob/main/gboxapp3.png?raw=true" alt="Шаг 3" style="width:100%; border-radius:8px; margin-top:10px;">
                
                <li>Данный файл появится во вкладке "Files", нажмите на приложение, которое вы хотите подписать и установить на ваше устройство</li>
                <img src="https://github.com/viibbee/Info/blob/main/gboxapp4.png?raw=true" alt="Шаг 4" style="width:100%; border-radius:8px; margin-top:10px;">
                
                <li>В появившемся cписке нажмите на "Sign"</li>
                <img src="https://github.com/viibbee/Info/blob/main/gboxapp5.png?raw=true" alt="Шаг 5" style="width:100%; border-radius:8px; margin-top:10px;">
                
                <li>В появившемся окне для подписи файла нажмите на "Sign"</li>
                <img src="https://github.com/viibbee/Info/blob/main/gboxapp6.png?raw=true" alt="Шаг 6" style="width:100%; border-radius:8px; margin-top:10px;">
                
                <li>После успешной подписи приложения появится окно с предупреждением о том, что необходимо удалить оригинал приложения перед установкой, нажмите на "Install"</li>
                <img src="https://github.com/viibbee/Info/blob/main/gboxapp7.png?raw=true" alt="Шаг 7" style="width:100%; border-radius:8px; margin-top:10px;">
                
                <li>Появится окно с предложением по установке приложения на ваше устройство, нажмите на "Install"</li>
                <img src="https://github.com/viibbee/Info/blob/main/gboxapp8.png?raw=true" alt="Шаг 8" style="width:100%; border-radius:8px; margin-top:10px;">
            </ol>
        `;
    } else if (type === 'esign-install') {
        html = `
            <h2>Установка приложений через ESign</h2>
            <ol>
                <li>Зайдите в ESign и убедитесь, что вы находитесь на вкладке "File"</li>
                <img src="https://github.com/viibbee/Info/blob/main/esignapp1.png?raw=true" alt="Шаг 1" style="width:100%; border-radius:8px; margin-top:10px;">
                
                <li>Оставшись на данной вкладке, нажмите на "•••" сверху справа</li>
                <img src="https://github.com/viibbee/Info/blob/main/esignapp2.png?raw=true" alt="Шаг 2" style="width:100%; border-radius:8px; margin-top:10px;">
                
                <li>В появившемся списке нажмите на "Import"</li>
                <img src="https://github.com/viibbee/Info/blob/main/esignapp3.png?raw=true" alt="Шаг 3" style="width:100%; border-radius:8px; margin-top:10px;">
                
                <li>Файлы устройства откроются автоматически, остается лишь выбрать файл приложения [Нажмите на файл]</li>
                <img src="https://github.com/viibbee/Info/blob/main/esignapp4.png?raw=true" alt="Шаг 4" style="width:100%; border-radius:8px; margin-top:10px;">
                
                <li>После выбора необходимого файла приложения, появится окно с предложением импортировать приложение в библиотеку, нажмите на "Import"</li>
                <img src="https://github.com/viibbee/Info/blob/main/esignapp5.png?raw=true" alt="Шаг 5" style="width:100%; border-radius:8px; margin-top:10px;">
                
                <li>Перейдите на вкладку "Apps"</li>
                <img src="https://github.com/viibbee/Info/blob/main/esignapp6.png?raw=true" alt="Шаг 6" style="width:100%; border-radius:8px; margin-top:10px;">
                
                <li>Нажмите на приложение, которое вы хотите подписать и установить на ваше устройство</li>
                <img src="https://github.com/viibbee/Info/blob/main/esignapp7.png?raw=true" alt="Шаг 7" style="width:100%; border-radius:8px; margin-top:10px;">
                
                <li>В появившемся списке нажмите на "Signature"</li>
                <img src="https://github.com/viibbee/Info/blob/main/esignapp8.png?raw=true" alt="Шаг 8" style="width:100%; border-radius:8px; margin-top:10px;">
                
                <li>В появившемся окне нажмите на "Signature"</li>
                <img src="https://github.com/viibbee/Info/blob/main/esignapp9.png?raw=true" alt="Шаг 9" style="width:100%; border-radius:8px; margin-top:10px;">
                
                <li>Дождитесь окончания подписи файла и нажмите на "Install"</li>
                <img src="https://github.com/viibbee/Info/blob/main/esignapp10.png?raw=true" alt="Шаг 10" style="width:100%; border-radius:8px; margin-top:10px;">
                
                <li>Появится окно с предложением по установке приложения на ваше устройство, нажмите на "Install"</li>
                <img src="https://github.com/viibbee/Info/blob/main/esignapp11.png?raw=true" alt="Шаг 11" style="width:100%; border-radius:8px; margin-top:10px;">
            </ol>
        `;
    }

    content.innerHTML = html;
    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('instructionModal').style.display = 'none';
}

// Привязываем кнопку основной инструкции к открытию модалки
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('mainInstructionBtn').addEventListener('click', () => {
        openModal('mainInstruction');
    });
});
