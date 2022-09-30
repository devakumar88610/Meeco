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
let e1 = new Employee(101, 'Rahul', 55000)
console.log(e1);
