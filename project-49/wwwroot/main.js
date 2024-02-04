let url = "http://localhost:5000/api/Users";
let newUrl = "http://localhost:5000/api/Users/";

let tbodyHead = document.getElementById("tbodyHead");
let addButton = document.getElementById("addButton");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");

addButton.addEventListener("click", addUser);

// раздел изменение пользователя
// отделила ф-ия редактирования одной кнопки
function buttonEditingClick() {

    // нашли строку, в которой нажата кнопка
    let parentEd = this.closest(".tr-editing");

    // нужно найти поля ввода фамилия / имя данной строки и сделать их доступными для изменения
    let childFirstName = parentEd.querySelector(".table-td-firstName");
    let childLastName = parentEd.querySelector(".table-td-lastName");

    // ищем 1 ребенка это id, нужен для чтения
    let firstChildID = parentEd.firstElementChild.textContent; // id

    let urlEditing = newUrl + firstChildID;

    if (childFirstName.disabled === true || childLastName.disabled === true) {

        childFirstName.disabled = false;
        childLastName.disabled = false;

        if ((childFirstName.textContent == null || "") || (childLastName.textContent == null || "")) return;
    } else {

        childFirstName.disabled = true;
        childLastName.disabled = true;

        fetch(urlEditing, {
            method: 'PUT',
            body: JSON.stringify({
                firstName: childFirstName.value,
                lastName: childLastName.value
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(response => {

            if (response.ok) {

                response
                    .text()
                    .then(text => {
                        let updatedUser = JSON.parse(text);
                        childFirstName.value = updatedUser.firstName;
                        childLastName.value = updatedUser.lastName;
                    });
            } else {
                alert("Ошибка HTTP: " + response.status);
            }
        });
    }
}

// раздел удаление пользователя
//  ф-ия удаления одной кнопки
function buttonDeleteClick() {

    let parent = this.closest(".tr-delete");

    let childId = parent.firstElementChild.textContent;

    let regexp = /(^([0-9a-z]{8})-([0-9a-z]{4})-([0-9a-z]{4})-([0-9a-z]{4})-([0-9a-z]{12})$)/gui;

    if (childId.match(regexp) == null) return;

    let deleteUrl = newUrl + childId;

    fetch(deleteUrl, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
    }).then(response => {

        if (response.ok) {
            parent.remove();
        } else {
            alert(`Ошибка HTTP: ${response.status} Пользователь с id ${childId} не найден`);
        }
    });
}

// раздел получение списка всех пользователей
fetch(url, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
})
    .then(response => {
        if (response.ok) {

            // функциональный стиль программирования
            // когда результат 1 функции передается следующей вниз по цепочке

            response
                .text()
                .then(text => JSON.parse(text)) // text => JSON.parse(text) или (тоже самое) : function(text) { return JSON.parse(text); }
                .then(enumerationUsers);

        } else {
            alert("Ошибка HTTP: " + response.status);
        }
    });


// вынесла используемые ф-ии в конец

function addUser() { // ф-ия для добавления 1 нового пользователя
    url = "http://localhost:5000/api/Users";

    firstName.textContent = firstName.value;
    lastName.textContent = lastName.value;

    if (firstName.textContent === "" || null) return;
    if (lastName.textContent === "" || null) return;

    // создали объект с введенными данными

    let user = {
        firstName: firstName.textContent,
        lastName: lastName.textContent
    };

    // создание пользователя

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
    }).then(response => {

        if (response.ok) {

            response
                .text()
                .then(text => {
                    let newUser = JSON.parse(text);
                    createRow(newUser.id, newUser.firstName, newUser.lastName);

                    firstName.value = '';
                    lastName.value = '';
                });
        } else {
            alert(`Ошибка HTTP: ${response.status}`);
        }
    });
}

function createRow(id, firstName, lastName) {

    let tr = document.createElement("tr"); // создали новую строку
    tr.className = "tr-delete tr-editing";

    let td1 = document.createElement("td"); // создали новые поля строки
    let td2 = document.createElement("td"); // создали новые поля строки
    let td3 = document.createElement("td"); // создали новые поля строки
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");

    let tdFirstName = document.createElement("input");
    tdFirstName.className = "input table-td-firstName";
    tdFirstName.disabled = true;
    td2.append(tdFirstName);

    let tdLastName = document.createElement("input");
    tdLastName.className = "input table-td-lastName";
    tdLastName.disabled = true;
    td3.append(tdLastName);

    td1.className = "table-td table-td-id";
    td2.className = "table-td";
    td3.className = "table-td";

    td1.style.padding = "0 10px";
    td2.style.padding = "0 10px";
    td3.style.padding = "0 10px";
    td4.style.padding = "0 10px";

    td4.className = 'table-icon';
    td5.className = 'table-icon';

//     td4.insertAdjacentHTML("afterbegin", `<button class="button buttonEditing">
// <img class="icon editing-icon" src="icon/editing-icon.png" alt="Редактировать"></button>`);
//     td5.insertAdjacentHTML("afterbegin", `<button class="button buttonDelete">
// <img class="icon delete-icon" src="icon/delete-icon.png" alt="Удалить"></button>`);

    let buttonEditing = document.createElement("button");
    buttonEditing.className = "button buttonEditing";
    td4.append(buttonEditing);

    let imgEditing = document.createElement("img");
    imgEditing.className = "icon editing-icon";
    imgEditing.src = "icon/editing-icon.png";
    imgEditing.alt = "Редактировать";

    buttonEditing.append(imgEditing);
    buttonEditing.addEventListener("click", buttonEditingClick);


    let buttonDelete = document.createElement("button");
    buttonDelete.className = "button buttonDelete";
    td5.append(buttonDelete);

    let imgDelete = document.createElement("img");
    imgDelete.className = "icon delete-icon";
    imgDelete.src = "icon/delete-icon.png";
    imgDelete.alt = "Удалить";

    buttonDelete.append(imgDelete);
    buttonDelete.addEventListener("click", buttonDeleteClick);


    td1.textContent = id;
    tdFirstName.value = firstName;
    tdLastName.value = lastName;

    tr.append(td1);
    tr.append(td2);
    tr.append(td3);
    tr.append(td4);
    tr.append(td5);

    tbodyHead.append(tr);
}

function enumerationUsers(array) { // ф-ия для получения всех пользователей

    for (let index = 0; index <= array.length - 1; index++) {

        createRow(array[index].id, array[index].firstName, array[index].lastName);
    }
}

