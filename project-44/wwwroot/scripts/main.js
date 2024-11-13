let divFormContainer = document.getElementById("prompt-form-container");
divFormContainer.hidden = true;
// спрятала див с кнопкой

// создала в index html доп. div с кнопкой, чтобы было точь-в-точь как в задании
let divStart = document.getElementById("Start");
let buttonStart = document.getElementById("buttonStart");

let form = document.getElementById("prompt-form");
let text = form.elements.text;
let submitOk = form.elements.textOk;
let cancel = form.elements.cancel;

buttonStart.addEventListener("click", onClick);
cancel.addEventListener("keydown", onKeydown);

submitOk.addEventListener("click", clickSubmitOk);
cancel.addEventListener("click", clickCancel);

function onClick() {
    divFormContainer.hidden = false;
    text.focus();
    document.body.style.overflow = "hidden";
    divStart.style.overflow = "hidden";
    document.body.style.backgroundColor = "#F0F0F0";
}

function onKeydown(ev) {

    if (ev.key === 'Tab') {
        ev.preventDefault();
        text.focus();
    }
}

function clickSubmitOk(e) {
    if (!text.value) {
        e.preventDefault();
    }
    else {
        alert(`Вы ввели: ${text.value}`);
    }
}

function clickCancel() {
    alert(`Вы ввели: null`);
    divFormContainer.hidden = true;
    document.body.style.overflow = "visible";
    document.body.style.backgroundColor = "white";
}