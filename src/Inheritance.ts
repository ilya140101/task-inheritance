interface IPersonData {
    name: string;
    secondName: string;
    age: number;
}

interface IStudentData extends IPersonData {
    phone: string;
}

/*
1. Напишите конструктор, который принимает в качестве параметра объект с интерфейсом IPersonData
2. Добавьте метод getData(), возвращающий объект, соответствующий интерфейсу IPersonData
 */
export class Person {
    readonly _name: string;
    readonly _secondName: string;
    readonly _age: number;

    constructor(iPersonData: IPersonData) {
        this._name = iPersonData.name;
        this._secondName = iPersonData.secondName;
        this._age = iPersonData.age;
    }

    getData(): IPersonData {
        return {
            name: this._name,
            secondName: this._secondName,
            age: this._age,
        };
    }
}

/*
1. Напишите конструктор, который принимает в качестве параметра объект с интерфейсом IStudentData
2. Добавьте метод getData(), возвращающий объект, соответствующий интерфейсу IStudentData
 */
export class Student extends Person {
    readonly _phone: string;

    constructor(iStudentData: IStudentData) {
        super(iStudentData);
        this._phone = iStudentData.phone;
    }

    getData(): IStudentData {
        return {
            phone: this._phone,
            name: this._name,
            secondName: this._secondName,
            age: this._age,
        };
    }
}
