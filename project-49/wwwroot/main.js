let url = "http://localhost:5000/api/Users";
let newUrl = "http://localhost:5000/api/Users/";
let urlForm = "http://localhost:5000/api/Users/form/";
let urlFormAdd = "http://localhost:5000/api/Users/form";

let tbodyHead = document.getElementById("tbodyHead");
let addButton = document.getElementById("addButton");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");

addButton.addEventListener("click", addUser);

// раздел изменение пользователя
// отделила ф-ия редактирования одной строки
function buttonEditingClick() {

    // нашли строку, в которой нажата кнопка
    let parentEd = this.closest(".tr-editing");

    // нужно найти поля ввода фамилия / имя данной строки и сделать их доступными для изменения
    let childFirstName = parentEd.querySelector(".input-firstName");
    let childLastName = parentEd.querySelector(".input-lastName");

    // ищем 1 ребенка это id, нужен для чтения
    let firstChildID = parentEd.firstElementChild.textContent; // id

    let urlEditing = urlForm + firstChildID;

    if (childFirstName.disabled === true || childLastName.disabled === true) {

        childFirstName.disabled = false;
        childLastName.disabled = false;

        if ((childFirstName.textContent == null || "") || (childLastName.textContent == null || "")) return;
    } else {
        childFirstName.disabled = true;
        childLastName.disabled = true;
        let formData = new FormData();
        formData.append("FirstName", childFirstName.value);
        formData.append("LastName", childLastName.value);

        fetch(urlEditing, {
            method: 'PUT',
            body: formData
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
//  ф-ия удаления одной строки
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

    if (firstName.value === "" || null) return;
    if (lastName.value === "" || null) return;

        let formData = new FormData();
        formData.append("FirstName", firstName.value);
        formData.append("LastName", lastName.value);

        // создание пользователя

        fetch(urlFormAdd, {
            method: 'POST',
            body: formData
        }).then(response => {

            if (response.ok) {

                response
                    .text()
                    .then(text => {
                        let newUser = JSON.parse(text);
                        createRow(newUser.id, newUser.firstName, newUser.lastName);

                        firstName.value = '';
                        lastName.value = '';
                       // firstName.disabled = false;
                       // lastName.disabled = false;
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

    let formFirstName = document.createElement("form");
    let formLastName = document.createElement("form");

    let tdFirstName = document.createElement("input");
    tdFirstName.disabled = true;
    let tdLastName = document.createElement("input");
    tdLastName.disabled = true;

    tdFirstName.className = "input-firstName";
    tdLastName.className = "input-lastName";

    td2.append(formFirstName);
    formFirstName.append(tdFirstName);
    td3.append(formLastName);
    formLastName.append(tdLastName);

    let buttonEditing = document.createElement("button");
    buttonEditing.className = "btn btn-warning";
    buttonEditing.style.width = "46px";
    td4.append(buttonEditing);

    let iconEditing = document.createElement("i");
    iconEditing.className = "fa-solid fa-pen";
    iconEditing.alt = "Редактировать";

    buttonEditing.append(iconEditing);
    buttonEditing.addEventListener("click", buttonEditingClick);

    let buttonDelete = document.createElement("button");
    buttonDelete.className = "btn btn-danger";
    td5.append(buttonDelete);

    let iconDelete = document.createElement("i");
    iconDelete.className = "fa-solid fa-user-xmark";
    iconDelete.alt = "Удалить";

    buttonDelete.append(iconDelete);
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