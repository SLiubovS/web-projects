// Перемешайте массив
// важность: 3
// Напишите функцию shuffle(array), которая перемешивает
// (переупорядочивает случайным образом) элементы массива.
//
//     Многократные прогоны через shuffle могут привести
// к разным последовательностям элементов. Например:
//
// let arr = [1, 2, 3];
//
// shuffle(arr);
// // arr = [3, 2, 1]
//
// shuffle(arr);
// // arr = [2, 1, 3]
//
// shuffle(arr);
// // arr = [3, 1, 2]
// // ...
// Все последовательности элементов должны иметь одинаковую вероятность.
//     Например, [1,2,3] может быть переупорядочено как [1,2,3] или [1,3,2],
//     или [3,1,2] и т.д., с равной вероятностью каждого случая.


const objects46 = function () {

    let arr = [1, 2, 3];

    function shuffle(arr) {

        let x = arr.at(0);
        arr.splice(0, 1);
        arr.push(x);

        return arr;
    }

    shuffle(arr);
    alert(arr); // arr = [3, 2, 1]

    shuffle(arr);
    alert(arr); // arr = [2, 1, 3]

    shuffle(arr);
    alert(arr); // arr = [3, 1, 2]
};