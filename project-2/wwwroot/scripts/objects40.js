// Сортировать в порядке по убыванию
// важность: 4
// let arr = [5, 2, 1, -10, 8];
//
// // ... ваш код для сортировки по убыванию
//
// alert( arr ); // 8, 5, 2, 1, -10


const objects40 = function () {

    let arr = [5, 2, 1, -10, 8];

    function sortDescending(a, b) {
        if (a > b) return -1;
        if (a === b) return 0;
        if (a < b) return 1;
    }
    arr.sort(sortDescending);
    alert(arr);
};