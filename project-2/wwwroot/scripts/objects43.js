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
    let names = [];
    let fil = users.filter(item => item.age > 24);
    for (item of fil) {

        names.push(`${item.name}`);
    }
    alert (names.sort());
    alert (names);

  // function sortDescending(a, b) {
  //       if (a.age > b.age) return 1;
  //       if (a.age === b.age) return 0;
  //       if (a.age < b.age) return -1;
  //   }
  //
  // alert (names.sort(sortDescending));
  // alert (names);
};