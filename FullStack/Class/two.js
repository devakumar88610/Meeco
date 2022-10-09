// Creating Class with this keyword
// this keyword refers to an object

class Employee{
    // emp_Id;
    // emp_Name;
    // emp_Salary;

    set_Id(id){
        this.emp_Id = id
    }
    set_Name(name){
        this.emp_Name = name
    }
    set_Salary(sal){
        this.emp_Salary = sal
    }
}

let alpha = new Employee();
let bravo = new Employee(); 
let charlie = new Employee();

alpha.set_Id("101")
alpha.set_Name("Jerry")
alpha.set_Salary("200000")

bravo.set_Id("102")
bravo.set_Name("Dev")
bravo.set_Salary("30000")

charlie.set_Id("103")
charlie.set_Name("Jaggu")
charlie.set_Salary("31000")

console.log(alpha);
console.log(bravo);
console.log(charlie);
