let employees = [{"id":1,"name":"Dinesh","gender":"Male","email":"dinesh@ibm.com"},
{"id":2,"name":"Dev","gender":"Male","email":"dev@ibm.com"},
{"id":3,"name":"Jagadish","gender":"Male","email":"jagadish@ibm.com"},
{"id":4,"name":"Gokul","gender":"Male","email":"gokul@ibm.com"},
{"id":5,"name":"Kanishka","gender":"Female","email":"kanishka@ibm.com"},
{"id":6,"name":"Narasimha","gender":"Female","email":"mlamar5@illinois.edu"},
{"id":7,"name":"Raj","gender":"Male","email":"Raj@nba.com"}]


function myData(){
let rows =''
employees.forEach(emp => {
    rows = rows + `<tr>
    <td>${emp.id}</td>
    <td>${emp.name}</td>
    <td>${emp.id}</td>
    </tr>`
});
document.getElementById('tdata').innerHTML=rows
}




/* function myData(){
    let rows= ''
    for (emp of employees) {
        rows = rows + `<tr>
        <td>${emp.id}</td>
        <td>${emp.name}</td>
        <td>${emp.gender}</td>
        <td>${emp.email}</td>
        </tr>`
    }
    document.getElementById('tdata').innerHTML=rows
} */
