// Создать функцию-конструктор Car
// объект который он создает должен иметь
// свойства: color (цвет машины) и speed (скорость машины)
// метод: SetSpeed (метод который устанавливает скорость машины)
// при создании машины можно указать ее цвет (строкой) скорость изначально равна 0

const objects14 = function () {
    function Car(color) {
        this.speed = 0;
        this.color = color;
        this.SetSpeed = function (speed) {
            this.speed = speed;
        }
    }

    // пример использования
    let vesta = new Car("yellow");
    alert(vesta.speed); // 0
    alert(vesta.color); // black
    vesta.SetSpeed(60);
    alert(vesta.speed); // 60
}