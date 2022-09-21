// Input Tag Attributes

// 1. required
// 2. value
// 3. placeholder
// 4. disabled
// 5. max
// 6. min
// 7. min & max
// 8. tab

let firstName = document.getElementById('fname-error')
let lastName = document.getElementById('lname-error')
let mobileNumber = document.getElementById('mobile-error')
let password1 = document.getElementById('password-error1')
let password2 = document.getElementById('password-error2')

function validateName1(){
    let fname = document.getElementById('first-name').value;
    if(fname == ''){
        document.getElementById('fname-error').innerHTML = 'Enter valid name'
    }
    if(isNan(fname) || fname < 1 || fname > 10)
}