// Напишіть програму для обчислення середнього балу студента. Програма має мати можливість вводити інформацію про студента, таку як його ім'я,
// прізвище та оцінки з різних предметів. Для обчислення середнього балу необхідно використовувати прототипне наслідування.

function Student(name, surname) {
  this.name = name;
  this.surname = surname;
  this.subjects = {};
}

Student.prototype.addGrade = function (subject, grade) {
  if (!this.subjects[subject]) {
    this.subjects[subject] = [];
  }
  if (grade > 0 && grade <= 12) {
    this.subjects[subject].push(grade);
    return `Оцінку по предмету ${subject} додано`;
  } else {
    return "Оцінка має бути в діапазоні від 1 до 12.";
  }
};

Student.prototype.calculateSubjectAverage = function (subject) {
  const subjectGrades = this.subjects[subject];
  if (!subjectGrades || subjectGrades.length === 0) {
    return `Студент ще не отримав оцінок по предмету ${subject}.`;
  }
  const sum = subjectGrades.reduce((acc, grade) => acc + grade, 0);
  return sum / subjectGrades.length;
};

Student.prototype.displayStudentInfo = function () {
  let output = `Ім'я: ${this.name}\n`;
  output += `Прізвище: ${this.surname}\n`;

  Object.keys(this.subjects).forEach((subject) => {
    const grades = this.subjects[subject];
    const average = this.calculateSubjectAverage(subject);
    output += `Оцінки по ${subject}: ${grades.join(", ")}\n`;
    output += `Середній бал по ${subject}: ${average}\n`;
  });

  return output;
};

const student = new Student("Софія", "Бондар");
student.addGrade("Математика", 9);
student.addGrade("Математика", 8);
student.addGrade("Математика", 9);
student.addGrade("Фізика", 8);
student.addGrade("Фізика", 9);
student.addGrade("Хімія", 7);
student.addGrade("Біологія", 7);
student.addGrade("Біологія", 7);

console.log(student.displayStudentInfo());
