class Person {
    name = undefined; age = undefined;
    constructor(argName, argAge) {
        this.name = argName;
        this.age = argAge;
    }

    prtInfo() {
        console.log(`name: ${this.name}, age"${this.age}`);
    }
}

class Student extends Person {
    dept = undefined;
    constructor(argName, argAge, argDept) {
        super(argName, argAge);
        this.dept = argDept;
    }

    prtInfo() {
        super.prtInfo();
        console.log(`dept: ${this.dept}`);
    }
}

std1 = new Student("Kim", 20, "gsc");
std1.prtInfo();