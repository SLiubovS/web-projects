let url = {
    files: "http://localhost:5000/api/Files",
    Id: "http://localhost:5000/api/Files/"
}
let tbody = document.getElementById("tbody");
let inputFile = document.getElementById("inputFile");
let sendBtn = document.getElementById("sendBtn");
let form = document.getElementById("form");

sendBtn.addEventListener("click", sendForm);

// раздел получение списка всех пользователей
fetch(url.files, {
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
                .then(enumerationFiles);

        } else {
            alert("Ошибка HTTP: " + response.status);
        }
    });

// раздел добавления 1 пользователя
function sendForm() {

    let formData = new FormData(form);
    let xhr = new XMLHttpRequest();
    xhr.open("POST", url.files);
    xhr.send(formData);
    xhr.onload = function() {
        alert(`Загружено: ${xhr.status} ${xhr.response}`);
        createRow(formData.id, formData.name);
        enumerationFiles();
    };

    xhr.onerror = function() { // происходит, только когда запрос совсем не получилось выполнить
        alert(`Ошибка соединения`);
    };


    // fetch(url.files, {
    //     method: 'POST',
    //     // headers: {
    //     //     'Content-Type': 'multipart/form-data'
    //     // },
    //     body: formData,
    //     // redirect: 'follow'
    // })
    //     .then(response => {
    //         if (response.ok) {
    //             response
    //                 .text()
    //                 .then(text => JSON.parse(text));
    //             createRow(formData.id, formData.name);
    //         } else {
    //             alert(`Ошибка HTTP: ${response.status}`);
    //         }
    //     });
    // });
}


function createRow(id, name) {

    let tr = document.createElement("tr"); // создали новую строку
    tr.className = "tr-download tr-delete";

    let td1 = document.createElement("td"); // создали новые поля строки
    let td2 = document.createElement("td"); // создали новые поля строки
    let td3 = document.createElement("td"); // создали новые поля строки
    let td4 = document.createElement("td");

    let buttonDownload = document.createElement("i");
    buttonDownload.className = "btn btn-warning fa-solid fa-pen";
    buttonDownload.alt = "Скачать";
    td3.append(buttonDownload);

    let buttonDelete = document.createElement("i");
    buttonDelete.className = "btn btn-danger fa-solid fa-user-xmark";
    buttonDelete.alt = "Удалить";
    td4.append(buttonDelete);

    td1.textContent = id;
    td2.textContent = name;

    tr.append(td1);
    tr.append(td2);
    tr.append(td3);
    tr.append(td4);

    tbody.append(tr);
}


// ф-ия для получения всех пользователей
function enumerationFiles(array) {

    for (let index = 0; index <= array.length - 1; index++) {

        createRow(array[index].id, array[index].name);
    }
}