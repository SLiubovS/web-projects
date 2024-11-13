import { Person } from "./person.js";
import { Employee } from "./employee.js";

let user = {
    name: "John",
    surname: "Smith",
    age: 25,
    getFullName: function () {
        return `${this.name} ${this.surname}`;
    },
    getFullNameWithAge: function () {
        return `${this.name} ${this.surname} ${this.age}`;
    }
};
console.log(user.name);
console.log(user.surname);
console.log(user.getFullName());
console.log(user.getFullNameWithAge());

function User(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;

    this.getFullName = function () {
        return `${this.name} ${this.surname}`;
    };
    this.getFullNameWithAge = function () {
        return `${this.name} ${this.surname} ${this.age}`;
    };
}

let user2 = new User("Иван", "Иванов", 31);
let user3 = new User("Люба", "Соловьева", 29);

console.log(user2.getFullNameWithAge());
console.log(user3.getFullNameWithAge());

let user4 = new Person("Саша", "Петров", 63);

console.log(user4.getFullNameWithAge());

let employee = new Employee("Mom", "Tompson", 54, "clerk");

console.log(employee.name);
console.log(employee.surname);
console.log(employee.age);
console.log(employee.job);
console.log(employee.getJob());
console.log(employee.getFullName());
console.log(employee.getFullNameWithAge());