// Напишіть програму для обчислення середнього балу студента. Програма має мати можливість вводити інформацію про студента, таку як його ім'я,
// прізвище та оцінки з різних предметів. Для обчислення середнього балу необхідно використовувати прототипне наслідування.

function Student(name, surname) {
  this.name = name;
  this.surname = surname;
  this.grades = [];
}

Student.prototype.addGrade = function (grade) {
  if (grade > 0) {
    this.grades.push(grade);
  }
};

Student.prototype.calculateAverage = function () {
  if (this.grades.length === 0) {
    return 0;
  }
  const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
  return sum / this.grades.length;
};
const student2 = new Student("John", "Doe");
student2.addGrade(10);
student2.addGrade(10);
student2.addGrade(1);

console.log(`Ім'я: ${student2.name}`);
console.log(`Прізвище: ${student2.surname}`);
console.log(`Оцінки: ${student2.grades.join(", ")}`);
console.log(`Середній бал: ${student2.calculateAverage()}`);
