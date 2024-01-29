let url = "http://localhost:5000/api/Users";

let tbodyHead = document.getElementById("tbodyHead");

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

// найти кнопку
// считать данные из input

let addButton = document.getElementById("addButton");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");

addButton.addEventListener("click", addUser);

async function addUser() {

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
    location.replace(document.URL);

    //    if (response.ok) {
    //        let text = await response.text();
    //        let array = JSON.parse(text);
    //        enumerationUsers(array);
    //    }
    // else {
    //        alert("Ошибка HTTP: " + response.status);
    //    }

    // сделать также, как с get, и получевш. пользователя добавить строкой к таблице

//     if (response.ok) { // если HTTP-статус в диапазоне 200-299
//         // получаем тело ответа в виде текста
//         let text = await response.text();
// //преобразовали текст в массив с объектами внутри
//         let array = JSON.parse(text);
//
//         // получили массив объектов, где 1 объект это отдельный пользователь с полями id, lastName, firstName
//
//
//
//         enumerationUsers(array);
//
//     } else {
//         alert("Ошибка HTTP: " + response.status);
//     }
}


// раздел удаление пользователя

// чтобы удалить данные, нужно в строку адреса добавить в конец /id,
// после чего отправить данные на сервер и получить ответ

// let inputDelete = document.getElementById("inputDelete");
// let deleteButton = document.getElementById("deleteButton");

//deleteButton.addEventListener("click", deleteUser);

let buttonsDelete = document.getElementsByClassName('buttonDelete');

for (let button of buttonsDelete) {

    button.addEventListener("click", async function () {

// async function deleteUser() {

        let parent = button.closest(".tr-delete");

        let chaildId = parent.firstElementChild.textContent;

        // alert(chaildId);
        // alert(typeof (chaildId));

        // inputDelete.textContent = inputDelete.value;

        let regexp = /(^([0-9a-z]{8})-([0-9a-z]{4})-([0-9a-z]{4})-([0-9a-z]{4})-([0-9a-z]{12})$)/gui;

        // if (inputDelete.textContent.match(regexp) == null) return;

        if (chaildId.match(regexp) == null) return;

        let newUrl = "http://localhost:5000/api/Users/";

        // url = newUrl + inputDelete.textContent;
        url = newUrl + chaildId;

        let response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
        });

        if (response.ok) {
            parent.remove();
            location.replace(document.URL);
        } else {
            // alert(`Ошибка HTTP: ${response.status} Пользователь с id ${inputDelete.textContent} не найден`);
            alert(`Ошибка HTTP: ${response.status} Пользователь с id ${chaildId} не найден`);
        }
        // });
        // }
    });
}





// раздел изменение пользователя

// чтобы изменить данные сущ. пользователя, нужно
// после нажатия на кнопку, чтобы поля input фамилия и имя стали доступные для ввода,
// считалось новое значение введенное (не пустое)
// далее при повторном нажатии на кнопку новые данные отправились на сервер и данные изменились

// находим все кнопки редактирования
let buttonEditing = document.getElementsByClassName('buttonEditing');

for (let buttonEd of buttonEditing) {

    buttonEd.addEventListener("click", async function () {

        let parentEd = buttonEd.closest(".tr-editing");

        let chaildEd = parentEd.firstElementChild.textContent;


    });
}








// вынесла используемую ф-ию в конец
function enumerationUsers(array) {
    // alert(json.length); // определили длину массива, 1, значить внутри 1 пользователь (объект) с полями id, lastName, firstName

    // alert(array.length); // 2, значит индекс 0 - первый пользователь, индекс 1 второй пользователь
    //далее нужно под каждого пользователя сделать строку в index.html

    // нашли таблицу, в конец таблицы добавляем новую строку под каждого пользователя

    for (let index = 0; index <= array.length - 1; index++) {

        let tr = document.createElement("tr"); // создали новую строку
        tr.className = "tr-delete tr-editing";

        let td1 = document.createElement("td"); // создали новые поля строки
        let td2 = document.createElement("td"); // создали новые поля строки
        let td3 = document.createElement("td"); // создали новые поля строки
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");

        td1.textContent = array[index].id;
        td2.textContent = array[index].firstName;
        td3.textContent = array[index].lastName;

        td1.className = "table-td";
        td2.className = "table-td";
        td3.className = "table-td";

        td1.style.padding = "0 10px";
        td2.style.padding = "0 10px";
        td3.style.padding = "0 10px";
        td4.style.padding = "0 10px";
        td5.style.padding = "0 10px";

        td4.className = 'table-icon';
        td5.className = 'table-icon';

        td4.insertAdjacentHTML("afterbegin", `<button class="button buttonEditing">
<img class="icon editing-icon" src="icon/editing-icon.png" alt="Редактировать"></button>`);
        td5.insertAdjacentHTML("afterbegin", `<button class="button buttonDelete">
<img class="icon delete-icon" src="icon/delete-icon.png" alt="Удалить"></button>`);

        tr.append(td1);
        tr.append(td2);
        tr.append(td3);
        tr.append(td4);
        tr.append(td5);

        tbodyHead.append(tr);
    }
}



// положить данную инфу (методы) в gitHub