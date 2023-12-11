class Student {
  setValues(id, name, marks) {
    this.id = id;
    this.name = name;
    this.marks = marks;
  }
  getValues() {
    console.log("Id = " + this.id);
    console.log("Name = " + this.name);
    console.log("Marks = " + this.marks);
  }
  study() {
    console.log("Student is Studing");
  }
}

let student1 = new Student();
student1.setValues(101, "Pankaj", 78);
student1.getValues();
student1.study();
