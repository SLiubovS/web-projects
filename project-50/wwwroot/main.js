let url = "http://localhost:5000/api/Files";
let newUrl = "http://localhost:5000/api/Files/";

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








// ф-ия для получения всех пользователей
function enumerationUsers(array) {

    for (let index = 0; index <= array.length - 1; index++) {

        createRow(array[index].id, array[index].firstName, array[index].lastName);
    }
}