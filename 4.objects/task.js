function Student(name, gender, age) {
   this.name = name;
   this. gender = gender;
   this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
   this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if(this.marks === undefined){ 
    this.marks = [mark];
    } else {
      this.marks.push(mark);
    }
}

Student.prototype.addMarks = function (...arrs) {

  if(this.marks === undefined){ 
    // добавить первую оценку 
    this.marks = [...arrs];
    } else {
      // добавить вторую и последующие оценки в массив
      this.marks.push(...arrs);
    };

}

Student.prototype.getAverage  = function () { 
    return this.marks.reduce((a, b) => a + b) / this.marks.length;
}

Student.prototype.exclude = function (reason) {
    delete Student.subject;
    delete Student.marks;
    this.excluded = reason; 
}

// ваш код для остальных методов