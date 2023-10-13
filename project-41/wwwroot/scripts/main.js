let table = document.getElementById('bagua-table');
let ok = document.getElementById("ok");
let cancel = document.getElementById("cancel");

table.addEventListener("click", tableClick);

function tableClick(event) { // вешаем обработчик событий на таблицу

    let td = event.target.closest('td'); // если клик произошел не на td - подняться до ближайшего родительского td
    if (!td) return; // если клик не на td и нет родительского td - не интересует

    if (!table.contains(td)) return; // если клик произошел вне таблицы или в другой таблице- пропустить

    td.addEventListener('mousedown', mousedown);
    mousedown(td);

    function mousedown(td) {

        let win = document.getElementById("selected");
        if (win === null) {
            let textarea = document.createElement("textarea");

            textarea.classList = td.classList;
            textarea.id = "selected";
            td.before(textarea);
            textarea.innerHTML = td.innerHTML;
            td.remove();
            if (!textarea) return;
            ok.style.visibility = "visible";
            cancel.style.visibility = "visible";
            let coords = textarea.getBoundingClientRect();
            textarea.after(ok);
            textarea.after(cancel);
            ok.addEventListener("click", clickButton);
            ok.addEventListener("click", clickButtonOk);
            cancel.addEventListener("click", clickButton);
            cancel.addEventListener("click", clickButtonCancel);
            textarea.focus();
        }
    }

    function clickButton() {
        ok.style.visibility = "hidden";
        cancel.style.visibility = "hidden";
        document.body.append(ok);
        document.body.append(cancel);
    }

    function clickButtonOk() {
        let newTd = document.createElement("td");
        let textarea = document.getElementById("selected");
        newTd.classList = textarea.classList;
        textarea.before(newTd);
        newTd.innerHTML = textarea.value;
        textarea.remove();
    }

    function clickButtonCancel() {
        let newTd = document.createElement("td");
        let textarea = document.getElementById("selected");
        if (textarea !== null) {
            newTd.classList = textarea.classList;
            textarea.before(newTd);
            newTd.innerHTML = textarea.textContent;
            textarea.remove();
        }
    }
}



