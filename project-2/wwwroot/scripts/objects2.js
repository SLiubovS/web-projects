// Напишите код, выполнив задание из каждого пункта отдельной строкой:
//
//     Создайте пустой объект user.
//     Добавьте свойство name со значением John.
//     Добавьте свойство surname со значением Smith.
//     Измените значение свойства name на Pete.
//     Удалите свойство name из объекта.

// вариант 2

const objects2 = function() {
    let user=  {};
    user.name = "John";
    alert(user.name);
    user.surname = 'Smith';
    alert(user.surname);
    user.name = "Pete";
    alert(user.name);
    delete user['name'];
    alert(user.name);
};