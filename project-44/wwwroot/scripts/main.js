let divFormContainer = document.getElementById("prompt-form-container");
divFormContainer.hidden = true;
// спрятала див с кнопкой

// создала в index html доп. div с кнопкой, чтобы было точь-в-точь как в задании
let divStart = document.getElementById("Start");
let buttonStart = document.getElementById("buttonStart");

let form = document.getElementById("prompt-form");
let text = form.elements.text;
let ok = form.elements.ok;
let cancel = form.elements.cancel;

buttonStart.addEventListener("click", onClick);
function onClick() {
    divFormContainer.hidden = false;
    text.focus();
}
cancel.addEventListener("blur", onBlur);
function onBlur() {
    text.focus();
}
// cancel.onkeydown = function () {
//     if (event.key === 'Tab') {
//         onKeyUp();
//     }
// }
cancel.addEventListener("click", onClick);
// cancel.addEventListener("keyup", onKeyUp);
// function onKeyUp() {
//     if (event.key === 'Tab') {
//         text.focus();
//     }
// }
    // window.onkeydown = function (event) {
    //
    //     if(event.key === 'Tab') {
    //         if ()
    //         event.preventDefault();
    //     }

        // if (event.key === 'Tab') {
        //
        //     event.preventDefault();

        // }




// вешаем обработчик событий на кнопку, при клике на кнопку форма див с кнопкой должна пропадать, на ее месте должна появиться форма с вопросом и ок или отмена

// далее при

// Требования:
//
//     Форма должна быть в центре окна.
//     Форма является модальным окном, это значит, что никакое взаимодействие с остальной частью страницы невозможно, пока пользователь не закроет его.
//     При показе формы, фокус должен находиться сразу внутри <input>.//посмотреть про таб индекс и я индекс -
// на инпут повесить change обработчик?
// Клавиши Tab/Shift+Tab должны переключать фокус между полями формы, не позволяя ему переходить к другим элементам страницы.