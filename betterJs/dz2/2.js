"use strict";

/*
###Задание 2
Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут 
оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные 
сообщения, вы решаете установить ограничение, отзыв должен быть не менее 50 
символов в длину и не более 500. В случае неверной длины, необходимо выводить 
сообщение об ошибке, рядом с полем для ввода.

Создайте HTML-структуру. 
На странице должны отображаться товары, под каждым товаром должен быть список 
отзывов на данный товар. Под каждым списком отзывов должна быть форма, где можно
добавить отзыв для продукта.

При добавлении отзыва, он должен отображаться на странице под предыдущими 
отзывами, а не заменять их.
Массив initialData должен использоваться для начальной загрузки данных 
при запуске вашего приложения.

Каждый отзыв, как и продукт, должен иметь уникальное id, для упрощения, используем 
`Date.now()`.

ВНИМАНИЕ! Если вы не проходили на курсе работу с DOM, то можно это задание не 
делать, пока рано.
*/

const initialData = [
  {
    id: Date.now(),
    product: "Apple iPhone 13",
    reviews: [
      {
        id: Date.now(),
        text: "Отличный телефон! Батарея держится долго.",
      },
      {
        id: Date.now(),
        text: "Камера супер, фото выглядят просто потрясающе.",
      },
    ],
  },
  {
    id: Date.now(),
    product: "Samsung Galaxy Z Fold 3",
    reviews: [
      {
        id: Date.now(),
        text: "Интересный дизайн, но дорогой.",
      },
    ],
  },
  {
    id: Date.now(),
    product: "Sony PlayStation 5",
    reviews: [
      {
        id: Date.now(),
        text: "Люблю играть на PS5, графика на высоте.",
      },
    ],
  },
];

const productsSelect = document.querySelector("#productField");
const reviewField = document.querySelector("#reviewField");
const reviewForm = document.querySelector("#reviewForm");
const reviewsList = document.querySelector("#reviewList");
const errorField = document.querySelector("#errorField");

let currentReviewId = initialData.reduce((max, review) => {
  const maxReviewId = review.reviews.reduce((a, r) => a > r.id ? a : r.id, 0);
  return Math.max(max, maxReviewId);
}, 0);

initialData.forEach(item => {
  const field = `<option value="${item.product}">${item.product}</option>`;
  productsSelect.insertAdjacentHTML("beforeend", field);
});

const renderError = (msg) => {
  errorField.textContent = msg ? msg : "";
};

const renderReviews = () => {
  reviewsList.innerHTML = "";
  initialData.forEach(item => {
    const field = `<dt>${item.product}</dt>`;
    const subField = `<dd><ul>${item.reviews.reduce((str, review) => str + "<li>" + review.text + "</li>", "")}</ul></dd>`;
    const insertStr = field + subField;
    reviewsList.insertAdjacentHTML("beforeend", insertStr);
  });
};

renderReviews();

reviewForm.addEventListener("submit", (e) => {
  e.preventDefault();
  renderError();
  try {
    if (!initialData.some(item => item.product === productsSelect.value)) {
      renderError("No product selected");
      return;
    }
    const review = reviewField.value;
    if (review.length < 50 || review.length > 500) {
      throw new Error("Your review must be length from 50 to 500");
    }
    const prod = initialData.find(el => el.product === productsSelect.value);
    console.log(prod);
    prod.reviews.push({id: ++currentReviewId, text: review});
    console.log(initialData);
  } catch (e) {
    renderError(e.message);
  } finally {
    renderReviews();
  }

});