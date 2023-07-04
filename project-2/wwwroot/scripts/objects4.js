// Проверка объекта на пустоту
// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

const objects4 = function () {
    function isEmpty(obj) {
        for (let key in obj) {
            return false;
        }
        return true;
    }

    let user = {};

    alert(isEmpty(user));
};