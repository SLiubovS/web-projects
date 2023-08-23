
// получаем html элемент img
const img = document.getElementById("img");

// получаем html элемент button
const button = document.getElementById("btn-img");

// объект с текстом для button
const text = {
  show: "Показать картинку",
  hide: "Скрыть картинку"
};

// функция, которая будет вызвана при нажатии на кнопку
button.onclick = function (ev) {
    img.hidden = !img.hidden;

    if (img.hidden) {
        button.innerText = text.show;
    }
    else {
        button.innerText = text.hide;
    }
};