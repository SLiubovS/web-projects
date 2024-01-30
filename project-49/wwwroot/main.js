let url = "http://localhost:5000/api/Users";
let newUrl = "http://localhost:5000/api/Users/";

let tbodyHead = document.getElementById("tbodyHead");


// раздел добавление пользователя

let response = await fetch(url, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
});

if (response.ok) { // если HTTP-статус в диапазоне 200-299
    // получаем тело ответа в виде текста
    let text = await response.text();
//преобразовали текст в массив с объектами внутри
    // получили массив объектов, где 1 объект это отдельный пользователь с полями id, lastName, firstName
    let array = JSON.parse(text);

    enumerationUsers(array);

} else {
    alert("Ошибка HTTP: " + response.status);
}

let addButton = document.getElementById("addButton");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");

addButton.addEventListener("click", addUser);



// раздел удаление пользователя

let buttonsDelete = document.getElementsByClassName('buttonDelete');

for (let button of buttonsDelete) {

    button.addEventListener("click", async function () {

        let parent = button.closest(".tr-delete");

        let childId = parent.firstElementChild.textContent;

        let regexp = /(^([0-9a-z]{8})-([0-9a-z]{4})-([0-9a-z]{4})-([0-9a-z]{4})-([0-9a-z]{12})$)/gui;

        if (childId.match(regexp) == null) return;

        url = newUrl + childId;

        let response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
        });

        if (response.ok) {
            parent.remove();
        } else {
            alert(`Ошибка HTTP: ${response.status} Пользователь с id ${childId} не найден`);
        }
    });
}





// раздел изменение пользователя

// находим все кнопки редактирования
let buttonEditing = document.getElementsByClassName('buttonEditing');

for (let buttonEd of buttonEditing) {

    buttonEd.addEventListener("click", async function () {


        // нашли строку, в которой нажата кнопка
        let parentEd = buttonEd.closest(".tr-editing");

        // нужно найти поля ввода фамилия / имя данной строки и сделать их доступными для изменения
        let childFirstName = parentEd.querySelector(".table-td-firstName");
        let childLastName = parentEd.querySelector(".table-td-lastName");

        // ищем 1 ребенка это id, нужен для чтения
        let firstChildID = parentEd.firstElementChild.textContent; // id

        let urlEditing = newUrl + firstChildID;

        if (childFirstName.disabled === true || childLastName.disabled === true) {

                    childFirstName.disabled = false;
                    childLastName.disabled = false;

                    if ( (childFirstName.textContent == null || "") || (childLastName.textContent == null || "") ) return;
        }
        else {

            childFirstName.disabled = true;
            childLastName.disabled = true;

                    let response = await fetch(urlEditing, {
                        method: 'PUT',
                        body: JSON.stringify({
                        firstName: childFirstName.value,
                        lastName: childLastName.value
                        }),
                        headers: {
                            "Content-type": "application/json; charset=UTF-8"
                        }
                    });
                    if (response.ok) {

                        let text = await response.text();
                        let updatedUser = JSON.parse(text);

                        childFirstName.value = updatedUser.firstName;
                        childLastName.value = updatedUser.lastName;
                    }
                    else {
                        alert("Ошибка HTTP: " + response.status);
                    }
        }
    });
}

// вынесла используемые ф-ии в конец

async function addUser() { // ф-ия для добавления 1 нового пользователя

    firstName.textContent = firstName.value;
    lastName.textContent = lastName.value;

    if (firstName.textContent === "" || null) return;
    if (lastName.textContent === "" || null) return;

    // создали объект с введенными данными

    let user = {
        firstName: firstName.textContent,
        lastName: lastName.textContent
    };

    let response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
    });

    if (response.ok) {

         let obj = await response.text();
         let newUser = JSON.parse(obj);

        createString(newUser.id, newUser.firstName, newUser.lastName);

        firstName.value = '';
        lastName.value = '';
    }
    else {
        alert(`Ошибка HTTP: ${response.status}`);
    }
}

// function enumerationUsers(array) { // ф-ия для получения всех пользователей
//     // alert(json.length); // определили длину массива, 1, значить внутри 1 пользователь (объект) с полями id, lastName, firstName
//
//     // alert(array.length); // 2, значит индекс 0 - первый пользователь, индекс 1 второй пользователь
//     //далее нужно под каждого пользователя сделать строку в index.html
//
//     // нашли таблицу, в конец таблицы добавляем новую строку под каждого пользователя
//
//     for (let index = 0; index <= array.length - 1; index++) {
//
//         let tr = document.createElement("tr"); // создали новую строку
//         tr.className = "tr-delete tr-editing";
//
//         let td1 = document.createElement("td"); // создали новые поля строки
//         let td2 = document.createElement("td"); // создали новые поля строки
//         let td3 = document.createElement("td"); // создали новые поля строки
//         let td4 = document.createElement("td");
//         let td5 = document.createElement("td");
//
//         td1.textContent = array[index].id;
//
//         let tdFirstName = document.createElement("input");
//         tdFirstName.className = "input table-td-firstName";
//         tdFirstName.value = array[index].firstName;
//         tdFirstName.disabled = true;
//         td2.append(tdFirstName);
//
//         let tdLastName = document.createElement("input");
//         tdLastName.className = "input table-td-lastName";
//         tdLastName.value = array[index].lastName;
//         tdLastName.disabled = true;
//         td3.append(tdLastName);
//
//         td1.className = "table-td";
//         td2.className = "table-td";
//         td3.className = "table-td";
//
//         td1.style.padding = "0 10px";
//         td2.style.padding = "0 10px";
//         td3.style.padding = "0 10px";
//         td4.style.padding = "0 10px";
//
//         td4.className = 'table-icon';
//         td5.className = 'table-icon';
//
//         td4.insertAdjacentHTML("afterbegin", `<button class="button buttonEditing">
// <img class="icon editing-icon" src="icon/editing-icon.png" alt="Редактировать"></button>`);
//         td5.insertAdjacentHTML("afterbegin", `<button class="button buttonDelete">
// <img class="icon delete-icon" src="icon/delete-icon.png" alt="Удалить"></button>`);
//
//         tr.append(td1);
//         tr.append(td2);
//         tr.append(td3);
//         tr.append(td4);
//         tr.append(td5);
//
//         tbodyHead.append(tr);
//     }
// }



function createString(id, firstName, lastName) {

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

    td4.insertAdjacentHTML("afterbegin", `<button class="button buttonEditing">
<img class="icon editing-icon" src="icon/editing-icon.png" alt="Редактировать"></button>`);
    td5.insertAdjacentHTML("afterbegin", `<button class="button buttonDelete">
<img class="icon delete-icon" src="icon/delete-icon.png" alt="Удалить"></button>`);

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

     createString(array[index].id, array[index].firstName, array[index].lastName);
    }
}

// положить данную инфу (методы) в gitHub