// тестовое задание объект с методом
// метод = функция внутри объекта

const objects8 = function (){
    let cat = {
        mustache: 10,
        paws: "не измеряли",
        tail: "пушистый",
        may: function () {
            alert('Мяу! У меня хвост ' + this.tail);
            alert("Мяу! У меня лапы " + this.paws + " !");
            alert('Мяууу! А усы у меня ' + this.mustache + " см");
        }
    };

    cat.may(); // вызов метода
};