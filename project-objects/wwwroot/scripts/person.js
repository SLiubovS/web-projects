export class Person {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    getFullName() {
        return `${this.name} ${this.surname}`;
    }
    getFullNameWithAge() {
        return `${this.name} ${this.surname} ${this.age}`;
    }
}