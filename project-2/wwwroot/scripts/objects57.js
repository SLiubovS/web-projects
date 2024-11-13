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

        let salaryPairs = Object.entries(salaries);

        let salaryObjects = [];

        for (let salaryPair of salaryPairs) {
            salaryObjects.push(
                {
                    name: salaryPair[0],
                    salary: salaryPair[1]
                });
        }

        function bigSalary(a, b) {
            if (a.salary > b.salary) return -1;
            if (a.salary < b.salary) return 1;
            if (a.salary === b.salary) return 0;
        }

        let sortedSalaryObjects = salaryObjects.sort(bigSalary);

        return sortedSalaryObjects[0].name;


        // длинный вариант решения через сортировку
        // let arr = Object.entries(salaries);
        // let array = [];
        // let [user1, user2, user3] = arr;
        //
        // let [name1, salary1] = user1;
        // let [name2, salary2] = user2;
        // let [name3, salary3] = user3;
        //
        //
        // array.push(salary1);
        // array.push(salary2);
        // array.push(salary3);
        //
        //
        // function bigSalary(a, b) {
        //     if (a > b) return -1;
        //     if (a < b) return 1;
        //     if (a === b) return 0;
        // }
        //
        // array.sort(bigSalary);
        //
        // if (array[0] === salary1) {
        //     return name1;
        // } if (array[0] === salary2) {
        //     return name2;
        // } if (array[0] === salary3) {
        //     return name3;
        // }
    }
    alert(topSalary(salaries));
};