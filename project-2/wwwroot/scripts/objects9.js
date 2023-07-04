// Задача: необходимо создать объект, объект квадрат со сторонами а и b, и  методом, который будет возвращать площадь этого квадрата

const objects9 = function () {
    let square = {
        a: 10,
        b: 30,
        area: function () {
            return (this.a * this.b);
        }
    };

    alert(square.area());
};