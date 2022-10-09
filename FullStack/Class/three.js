// A constructor is a special function that creates and initializes an object instance of a class

class Employee{
    // emp_Id;
    // emp_Name;
    // emp_Sal;
    constructor(ids, names, sals){
        this.id = ids;
        this.name = names;
        this.salary = sals;
    }
}
let e1 = new Employee(101, 'Jerry', 55000)
let e2 = new Employee(102, 'Dev', 30000)
let e3 = new Employee(103, 'Jaggu', 31000)
console.log(e1);
console.log(e2);
console.log(e3);
