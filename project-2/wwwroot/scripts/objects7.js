// примитивные типы данных(например число(number)), передаются в функцию путем копирования (по значению).
// Объекты передаются в функции путем копирования ссылки (по ссылке).

// задание сравнение объектов

const objects7 = function () {
    const obj = { x: 10, y: 5 };
    const obj2 = { x: 10, y: 5 };
    alert((obj.x === obj2.x) && (obj.y === obj2.y));
};