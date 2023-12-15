// *Створити об'єкт "Студент" з методами для додавання та видалення предметів, які він вивчає.

const student = {
  subjects: [],
  addSubject: function (subject) {
    if (this.subjects.includes(subject)) {
      return `Ви вже вивчили предмет ${subject}`;
    }
    this.subjects.push(subject);
    return `Предмет ${subject} додано`;
  },

  removeSubject: function (subject) {
    const index = this.subjects.indexOf(subject);
    if (index !== -1) {
      this.subjects.splice(index, 1);
      return `Предмет ${subject} видалено`;
    }
    return ` Ви не вивчаєте предмет ${subject}`;
  },
};

// Дані для перевірки:
console.log(student.addSubject("Математика")); // Предмет Математика додано.
console.log(student.addSubject("Історія")); // Предмет Історія додано.
console.log(student.addSubject("Математика")); // Ви вже вивчаєте предмет Математика.
console.log(student.subjects); // ["Математика", "Історія"]
console.log(student.removeSubject("Історія")); // Предмет Історія видалено.
console.log(student.subjects); // ["Математика"]
console.log(student.removeSubject("Англійська")); // Ви не вивчаєте предмет Англійська.
