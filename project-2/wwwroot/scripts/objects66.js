// Преобразуйте объект в JSON, а затем обратно в обычный объект
// важность: 5
// Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.
//
//     let user = {
//     name: "Василий Иванович",
//     age: 35
// };

const objects66 = function () {

    let user = {
        name: "Василий Иванович",
        age: 35
    };

    let json = JSON.stringify(user);

    alert(json); // выводила для проверки, необязательно

    let jsonObj = JSON.parse(json);

    alert(`${jsonObj.name}, ${jsonObj.age},`); // выводила для проверки, необязательно

    // решение предлагает тоже самое, но одной строкой
    // у меня вышло больше, т.к. делала поэтапно
    // тоже самое, но короче:
    // let json = JSON.parse(JSON.stringify(user));
};