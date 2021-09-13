class Student {
  constructor(name, roll) {
    this.name = name;
    this.roll = roll;
  }
}

function getName(student) {
  console.log(`Student's Name is ${student.name}`);
}

function getRoll(student) {
  console.log(`Student's Roll is ${student.roll}`);
}

export default Student;
export { getName, getRoll };
