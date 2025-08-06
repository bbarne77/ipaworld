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
