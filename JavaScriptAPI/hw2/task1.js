/* 1. Создайте интерфейс веб-страницы, который включает в себя следующие элементы:
a. Контейнер для отображения текущего изображения.
b. Кнопки "Предыдущее изображение" и "Следующее изображение" для переключения между изображениями.
c. Навигационные точки (индикаторы) для быстрого переключения между изображениями.
2. Используйте HTML для создания элементов интерфейса.
3. Используйте JavaScript для обработки событий:
a. При клике на кнопку "Предыдущее изображение" должно отображаться предыдущее изображение.
b. При клике на кнопку "Следующее изображение" должно отображаться следующее изображение.
c. При клике на навигационные точки, слайдер должен переключаться к соответствующему изображению.
4. Слайдер должен циклически переключаться между изображениями, то есть после последнего изображения должно отображаться первое, и наоборот.
5. Добавьте стилизацию для слайдера и элементов интерфейса с использованием CSS для улучшения внешнего вида. */

const sliderImages = document.querySelectorAll('.slider-image');
const navigationDots = document.querySelectorAll('.dot');
const previousButton = document.querySelector('.previous-button');
const nextButton = document.querySelector('.next-button');

let currentIndex = 0;

function showImage(index) {
  sliderImages.forEach(image => image.classList.remove('active'));
  navigationDots.forEach(dot => dot.classList.remove('active'));
  sliderImages[index].classList.add('active');
  navigationDots[index].classList.add('active');
}

function previousImage() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = sliderImages.length - 1;
  }
  showImage(currentIndex);
}

function nextImage() {
  currentIndex++;
  if (currentIndex >= sliderImages.length) {
    currentIndex = 0;
  }
  showImage(currentIndex);
}

function switchToImage(index) {
  currentIndex = index;
  showImage(currentIndex);
}

previousButton.addEventListener('click', previousImage);
nextButton.addEventListener('click', nextImage);

navigationDots.forEach((dot, index) => {
  dot.addEventListener('click', () => switchToImage(index));
});

showImage(currentIndex);