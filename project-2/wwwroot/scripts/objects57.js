// Максимальная зарплата
// важность: 5
// У нас есть объект salaries с зарплатами:
//
//     let salaries = {
//         "John": 100,
//         "Pete": 300,
//         "Mary": 250
//     };
// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.
//
//     Если объект salaries пустой, то нужно вернуть null.
//     Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
//     P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.





const objects57 = function () {

    let salaries = {
        "John": 100,
        "Pete": 300,
        "Mary": 250
    };

    function topSalary(salaries) {

 let arr = Object.entries(salaries);

 for (let a of arr) {
     alert (a);
 }




    }

    topSalary(salaries);
};