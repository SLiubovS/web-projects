let arr = []; // для проверки свойств (вывод в консоль)

let peoples = {
    works: "during the day",
    eats: "food",
    wears: "clothes"
}

function FamilyMembers(name, age) {
    this.name = name;
    this.age = age;
    this.ageDifference = function () {
        if (this.age > 20) {
            let ageNew = this.age - 20;
            return `Ребенок родился, когда мне было ${ageNew} лет`;
        } else {
            return `Я родился ${this.age} лет назад`;
        }
    }
}

FamilyMembers.prototype = peoples; // запись буквально говорит: всем FamilyMembers созданным через new, присвой свойства и значения из peoples


let mother = new FamilyMembers("Mom", 50);
let father = new FamilyMembers("Dad", 54);
let son = new FamilyMembers("Dima", 20);

console.log(mother.name);
console.log(father.age);
console.log(`${son.name}, ${son.age}`);

console.log(`${mother.name}: ${mother.ageDifference()}`);
console.log(`${father.name}: ${father.ageDifference()}`);
console.log(`${son.name}: ${son.ageDifference()}`);

// ниже проверка - работает ли прототипирование
console.log(mother.works);
console.log(father.eats);
console.log(son.wears);

for (let elem in son) {
    arr.push(elem);
}
console.log(`Все ключи, которые содержит объект son: ${arr}`);


// разборка классов

class Animal {
    constructor(name, view, legs, wings) {
        this.name = name;
        this.view = view;
        this.legs = legs;
        this.wings = wings;
    }

    determineType() {
        if (this.view === "wild") {
            this.danger = "high";
            this.iron = "it is forbidden";
        } else {
            this.danger = "low";
            this.iron = "can";
        }
    }
}

let tiger = new Animal("tiger", "wild", 4, "no");
let pussyCat = new Animal("pussyCat", "pet", 4, "no");
let hawk = new Animal("hawk", "wild", 2, "yes");

tiger.determineType();
pussyCat.determineType();
hawk.determineType();

console.log(Object.keys(tiger));
console.log(Object.values(tiger));

console.log(Object.keys(pussyCat));
console.log(Object.values(pussyCat));

console.log(Object.keys(hawk));
console.log(Object.values(hawk));




// работа с кнопкой (Открытие окон и методы window, попап)

let button = document.getElementById("but");

let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
width=550,height=500,left=1150,top=250`;

button.onclick = ()=> {
    let newWindow = open('https://ru.wikipedia.org/wiki/%D0%91%D0%B8%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B5_%D0%B1%D0%B5%D1%81%D1%81%D0%BC%D0%B5%D1%80%D1%82%D0%B8%D0%B5', 'test', params);
popUpLoad(newWindow);
};

function popUpLoad(event) {
    // // event.close();
    // alert(event.closed); // true
}