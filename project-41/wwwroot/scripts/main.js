let table = document.getElementById('bagua-table');
let textarea = document.createElement("textarea");
let ok = document.getElementById("ok");
let cancel = document.getElementById("cancel");

table.onclick = function (event) { // вешаем обработчик событий на таблицу

    let td = event.target.closest('td'); // если клик произошел не на td - подняться до ближайшего родительского td
    if (!td) return; // если клик не на td и нет родительского td - не интересует

    if (!table.contains(td)) return; // если клик произошел вне таблицы или в другой таблице- пропустить

    focus(td); // если клик на td, запускаем функцию фокуса на элементе
};

function focus(td) {

    let textarea = document.createElement("textarea");
    textarea.classList = td.classList;
    textarea.id = "selected";
    td.before(textarea);
    textarea.innerHTML = td.innerHTML;
    td.remove();
    textarea.style.border = "none";
    click(textarea);
    if (ok.style.visibility === "visible") {
    }

    function click(textarea) {
        // убрать обводку textarea  - пока не поняла как
        if (!textarea) return;
        ok.style.visibility = "visible";
        cancel.style.visibility = "visible";
        let coords = textarea.getBoundingClientRect();

        textarea.after(ok);
        textarea.after(cancel);

        // let div1 = document.createElement("span");
        // div1.id = "div1";
        // let div2 = document.createElement("span");
        // div2.id = "div2";
        // document.body.prepend(div1);
        // div1.style.height = "coords.top";
        // textarea.after(div2);
        ok.addEventListener("click", clickButtonOk);
        cancel.addEventListener("click", clickButtonCancel);


        // если кнопка видима, то вешаем на нее обработчик событий клик
        //
        let newTd = document.createElement("td");

        function clickButtonOk() {

            ok.style.visibility = "hidden";
            cancel.style.visibility = "hidden";
            document.body.append(ok);
            document.body.append(cancel);

            newTd.classList = textarea.classList;
            textarea.before(newTd);
            end();
            textarea.remove();
        }

        function clickButtonCancel() {
            ok.style.visibility = "hidden";
            cancel.style.visibility = "hidden";
            document.body.append(ok);
            document.body.append(cancel);

            newTd.classList = textarea.classList;
            textarea.before(newTd);
            newTd.innerHTML = textarea.textContent;
            textarea.remove();
        }

        function end() {

            newTd.innerHTML = textarea.value;
        }
    }
}

/* ваш код */

// если клик на td:

// при нажатии на которые либо фиксируются(перезаписываются), либо отменяются все действия.
