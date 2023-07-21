// Фильтрация уникальных элементов массива
// важность: 5
// Допустим, у нас есть массив arr.
//
//     Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.
//
//     Например:
//
// function unique(arr) {
//     /* ваш код */
// }
//
// let values = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
//
// alert( unique(values) ); // Hare,Krishna,:-O
// P.S. Здесь мы используем строки, но значения могут быть любого типа.
//
//     P.P.S. Используйте Set для хранения уникальных значений.


const objects53 = function () {


    function unique(arr) {
        let set = new Set();
        let array = [];
        for (let i of arr) {
            set.add(i);
        }
        for (let j of set) {
            array.push(j);
        }

        return array;
    }

    let values = ["Hare", "Krishna", "Hare", "Krishna",
        "Krishna", "Krishna", "Hare", "Hare", ":-O"
    ];

    alert(unique(values)); // Hare,Krishna,:-O

};