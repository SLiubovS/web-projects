// ...ваш код...
// Заметьте: <textarea> должен иметь class="edit"
// my.css содержит стиль, чтобы <textarea> и <div> были одного размера

let view = document.getElementById("view");
let textarea = document.createElement("textarea");
view.addEventListener('mousedown', mousedown);
view.addEventListener('blur', blur);

function mousedown(elem) {
    focus(elem);
}

function focus(elem) {

    textarea.id = "view";
    textarea.className = "edit";
    document.body.append(textarea);
    textarea.addEventListener('blur', blur);
    textarea.innerHTML = view.innerHTML;
    view.remove();
    textarea.onkeydown = function () {
        if (event.code === 'Enter') {
            blur(elem);
        }
    }
}

function blur() {

    let textarea = document.getElementById("view");
    let div = document.createElement("div");

    view.id = "view";
    view.className = "view";
    document.body.append(view);
    end();
    textarea.remove();

    function end() {
        view.innerHTML = textarea.value;
    }
}

