// js/section.js

// Создание и отображение кнопок при клике на пузырь "?"
document.addEventListener('DOMContentLoaded', function () {
  const helpBubble = document.querySelector('.help-bubble');

  // Контейнер для кнопок
  const popup = document.createElement('div');
  popup.classList.add('help-popup');
  popup.style.display = 'none';

  const buttons = [
    { text: 'Что такое Сертификат ?', link: '#' },
    { text: 'Как получить Сертификат ?', link: '#' },
    { text: 'Как установить Scarlet ?', link: '#' },
    { text: 'Как установить Gbox ?', link: '#' },
    { text: 'Как установить ESign ?', link: '#' },
  ];

  buttons.forEach(btn => {
    const el = document.createElement('a');
    el.href = btn.link;
    el.className = 'help-popup-btn';
    el.textContent = btn.text;
    popup.appendChild(el);
  });

  document.body.appendChild(popup);

  helpBubble.addEventListener('click', () => {
    popup.style.display = popup.style.display === 'none' ? 'flex' : 'none';
  });
});

/* CSS (вставь в конец section.css или style.css) */
/* Стили для popup-кнопок */
/*
.help-popup {
  position: fixed;
  bottom: 70px;
  right: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 1000;
  animation: fadeInUp 0.3s ease;
}

.help-popup-btn {
  padding: 8px 14px;
  background: linear-gradient(135deg, #00c6ff, #0072ff);
  color: white;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 500;
  text-decoration: none;
  backdrop-filter: blur(6px);
  box-shadow: 0 4px 12px rgba(0, 198, 255, 0.3);
  transition: transform 0.2s ease;
}

.help-popup-btn:hover {
  transform: scale(1.05);
}
*/
