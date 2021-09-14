class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  printName() {
    console.log(`Person's name is : ${this.name}`);
  }
}

class Student extends Person {
  constructor(name, age, roll) {
    super(name, age);
    this.roll = roll;
  }
  printRoll() {
    console.log(this.roll);
  }
}

var student = new Student("Ram", 12, 12);
student.printName();
student.printRoll();
