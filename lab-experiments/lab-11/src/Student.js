export class Student {
    constructor(name, marks) {
      this.name = name;
      this.marks = marks;
    }
  
    calculateGrade() {
      if (this.marks >= 90) return 'A';
      else if (this.marks >= 75) return 'B';
      else if (this.marks >= 60) return 'C';
      else return 'F';
    }
  }
  