document.addEventListener('DOMContentLoaded', () => {
  const helpBubble = document.querySelector('.help-bubble');
  const popupMenu = document.getElementById('help-menu');
  const closeBtn = popupMenu.querySelector('.close-btn');

  // Функция для показа/скрытия меню
  const toggleMenu = () => {
    popupMenu.classList.toggle('show');
  };

  // Обработчик клика по пузырю помощи
  helpBubble.addEventListener('click', toggleMenu);

  // Обработчик клика по кнопке закрытия
  closeBtn.addEventListener('click', toggleMenu);

  // Закрыть меню при клике вне его
  document.addEventListener('click', (event) => {
    if (!helpBubble.contains(event.target) && !popupMenu.contains(event.target)) {
      popupMenu.classList.remove('show');
    }
  });
});
