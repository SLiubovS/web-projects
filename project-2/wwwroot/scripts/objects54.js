// Сумма свойств объекта
// важность: 5
// Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.
//
//     Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.
//
//     Если объект salaries пуст, то результат должен быть 0.
//
// Например:
//
//     let salaries = {
//         "John": 100,
//         "Pete": 300,
//         "Mary": 250
//     };
//
// alert( sumSalaries(salaries) ); // 650


const objects54 = function () {

    let salaries = {
        "John": 100,
        "Pete": 300,
        "Mary": 250
    };

    function sumSalaries(arr) {
        let sum = 0;
        let array = Object.values(salaries);
        for (let num of array) {
            sum += num;
        }
        return sum;
    }

    alert(sumSalaries(salaries));
};