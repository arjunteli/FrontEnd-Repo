class Employee {
  orgNAme = "Google Inc.";
  constructor(empId, empName, empSalary) {
    this.empId = empId;
    this.empName = empName;
    this.empSalary = empSalary;
  }
  getEmpInfo() {
    console.log("ID = " + this.empId);
    console.log("Name = " + this.empName);
    console.log("Salary = " + this.empSalary);
    console.log("Organization Name = " + this.orgNAme);
  }
}
let emp1 = new Employee(101, "Amit", 177333);
let emp2 = new Employee(102, "Aniket", 178333);
emp1.getEmpInfo();
console.log("********************************");
emp2.getEmpInfo();
