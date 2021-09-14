export default class Student {
  constructor(name, roll) {
    this.name = name;
    this.roll = roll;
  }
}

export function getName(student) {
  console.log(`Student's Name is ${student.name}`);
}

export function getRoll(student) {
  console.log(`Student's Roll is ${student.roll}`);
}

// export default Student;
// export { getName, getRoll };
