// Получить средний возраст
// важность: 4
// Напишите функцию getAverageAge(users), которая принимает массив объектов со
// свойством age и возвращает средний возраст.
//
//     Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.
//
//     Например:
//
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };
//
// let arr = [ vasya, petya, masha ];
//
// alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28


const objects47 = function () {

    let vasya = { name: "Вася", age: 25 };
    let petya = { name: "Петя", age: 30 };
    let masha = { name: "Маша", age: 29 };

    let arr = [vasya, petya, masha];

    function getAverageAge(arr) {

        let array = [];
        let result = +'';

        for (let item of arr) {
            if (item.age) {
                array.push(item.age);
            }
        }
        for (let items of array) {
            result += items;
        }
        let results = result / array.length;
        return results;
    }
    alert(getAverageAge(arr));
};