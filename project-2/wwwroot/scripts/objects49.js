// Создайте объект с ключами из массива
// важность: 4
// Допустим, мы получили массив пользователей в виде {id:..., name:..., age:... }.
//
// Создайте функцию groupById(arr), которая создаст из него объект с id в качестве
// ключа и элементами массива в качестве значений.
//
//     Например:
//
// let users = [
//     {id: 'john', name: "John Smith", age: 20},
//     {id: 'ann', name: "Ann Smith", age: 24},
//     {id: 'pete', name: "Pete Peterson", age: 31},
// ];
//
// let usersById = groupById(users);
//
// /*
// // после вызова у нас должно получиться:
//
// usersById = {
//   john: {id: 'john', name: "John Smith", age: 20},
//   ann: {id: 'ann', name: "Ann Smith", age: 24},
//   pete: {id: 'pete', name: "Pete Peterson", age: 31},
// }
// */
// Такая функция очень удобна при работе с данными, которые приходят с сервера.
//
// В этой задаче мы предполагаем, что id уникален.
// Не может быть двух элементов массива с одинаковым id.
//
// Используйте метод .reduce в решении.


const objects49 = function () {

let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
];

    function groupById(arr) {
        return arr.reduce((obj, value) => {
            obj[value.id] = value;
            return obj;
        }, {})
    }


    groupById(users);


};