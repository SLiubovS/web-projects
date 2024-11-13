// тестирование метода find у массива

const objects50 = function () {

    let triangles = [
        { x: 5, y: 1, z: 2 },
        { x: 3, y: 4, z: 8 },
        { x: 6, y: 7, z: 15 }
    ];

    let result = triangles.find(obj => obj.z === 8);

    alert(`x = ${result.x}, y = ${result.y}, z = ${result.z}`); // возвращаем элемент z  у которого равен 8
};