export class Person {
    name: string;
    surname: string;
    age: string;

    constructor() { }

    valid() {
        if (this.name && this.surname && this.age)
            return true;
        return false;
    }
}