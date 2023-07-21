// Оставить уникальные элементы массива
// важность: 4
// Пусть arr – массив строк.
//
//     Напишите функцию unique(arr), которая возвращает массив,
//     содержащий только уникальные элементы arr.
//
//     Например:
//
// function unique(arr) {
//     /* ваш код */
// }
//
// let strings = ["кришна", "кришна", "харе", "харе",
//     "харе", "харе", "кришна", "кришна", ":-O"
// ];
//
// alert( unique(strings) ); // кришна, харе, :-O


const objects48 = function () {

    let strings = ["кришна", "кришна", "харе", "харе",
        "харе", "харе", "кришна", "кришна", ":-O"
    ];

    function unique(arr) {
        let str = [];

        for (let element of arr) {
            if (str.findIndex(item => item === element) === -1) {
                str.push(element);
            }
        }
        return str;
    }

    alert(unique(strings));
};