// Сумма свойств объекта

// У нас есть объект, в котором хранятся зарплаты нашей команды:
//
//     let salaries = {
//         John: 100,
//         Ann: 160,
//         Pete: 130
//     }
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
//
// Если объект salaries пуст, то результат должен быть 0.

const objects5 = function () {
    function sum(obj) {
        let salary = 0;


        for (let key in obj) {

            salary += obj[key];
        }

        return salary;
    }

    const salaries = {
        John: 100,
        Ann: 160,
        Pete: 130
    }

    alert(sum(salaries));
};