// реализовать функцию showFields(obj) которая будет с помощью alert выводить через значения всех полей объекта
// использовать синтаксис Function Declaration


// пример вызова данной функции

let flower = {
   name: "Незабудка",
   description: "мой любимый",
   kind: "цветок"
};
//
// showFields(flower); // на экране сначала получим "Незабудка", затем "мой любимый", потом "цветок"

const objects21 = function () {
    function showFields(obj) {
        for(let key in obj) {
            alert(obj[key]);
        }
    }
    showFields(flower);
};