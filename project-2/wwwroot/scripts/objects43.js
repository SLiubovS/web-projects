// Трансформировать в массив имён
// важность: 5
// У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код,
//     который преобразует их в массив имён.
//
//     Например:
//
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
//
// let users = [ vasya, petya, masha ];
//
// let names = /* ... ваш код */
//
//     alert( names ); // Вася, Петя, Маша


const objects43 = function () {

    let vasya = {name: "Вася", age: 25};
    let petya = {name: "Петя", age: 30};
    let masha = {name: "Маша", age: 28};

    let users = [vasya, petya, masha];
    let result = [];


    function sortDescending(a, b) {
        if (a.age > b.age) return -1;
        if (a.age === b.age) return 0;
        if (a.age < b.age) return 1;
    }



//     let names = users.filter(obj => obj.age > 24);
//     for (let obj of names) {
//         result.push(`${obj.name}`);
//
//         // alert (result); // не совсем то, выдает вася, потом вася, петя и на третьем разе вася, петя, маша
//     }
//
//     for (obj of names) {
// // let results = `${vasya.name}, ${petya.name}, ${masha.name}`;
//         // alert (results); // выдает 3 раза массив вася, петя, маша....
//     alert (`${obj.name}`);
//     }


// alert (`${names}`);


};