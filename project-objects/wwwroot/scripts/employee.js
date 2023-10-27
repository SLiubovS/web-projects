import {Person} from "./person.js";

export class Employee extends Person {
    constructor(name, surname, age, job) {
        super(name, surname, age);
        this.job = job;
    }

    getJob() {
        return this.job;
    }
}