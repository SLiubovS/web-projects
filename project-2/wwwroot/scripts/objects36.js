// Вызов функции из массива

const objects36 = function () {

    let arr = [1, 2, 3, 4, 5];
    alert(arr);
    arr.push(function () { alert('Привет!') });
    arr[5]();
    let f = arr[5];
    f();
};