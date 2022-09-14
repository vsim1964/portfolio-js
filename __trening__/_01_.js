const { join } = require("lodash-es");

// * запись данных
let limitAge = confirm('Тебе есть 18?');
let name = prompt('Как тебя зовут');

console.log(limitAge);
console.log(name);

// * смысл переменных
[1, 2, 3, 4, 5].push(6);
const arr = [1, 2, 3, 4, 5];
arr.push(6);
console.log(arr);

// * objectdocument
console.log(document); - верстка + объект
console.dir(document); - объект


// * работы с объектом страницы
const orderBtn = document.getElementById('order-btn');
const overlayModal = document.getElementById('overlay_modal');

orderBtn.textContent = 'Кликни!'
overlayModal.classList.add('page__overlay_modal_open');
overlayModal.classList.remove('page__overlay_modal_open');
