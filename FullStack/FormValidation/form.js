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
let submitError = document.getElementById('submit-error')

function validateName1(){
    let fname = document.getElementById('first-name').value;
    if(fname == 0){
        firstName.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i>';
        fname
        return false;
    }
    if(!fname.match(/^[A-Za-z]*$/)){
        firstName.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
        return false;
    }
    firstName.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateName2(){
    let lname = document.getElementById('last-name').value;
    if(lname == 0){
        lastName.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i>';
        return false;
    }
    if(!lname.match(/^[A-Za-z]*$/)){
        lastName.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
        return false;
    }
    lastName.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateMobile(){
    let mobile = document.getElementById('mobile-number').value;
    if(mobile == 0){
        mobileNumber.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i>';
        return false;
    }
    if(!mobile.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        mobileNumber.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
        return false;
    }
    mobileNumber.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validatePassword1(){
    let pswd1 = document.getElementById('password-one').value;
    if(pswd1 == 0){
        password1.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i>';
        return false;
    }
    if(pswd1.length < 8){
        password1.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
        return false;
    }
    password1.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validatePassword2(){
    let pswd1 = document.getElementById('password-one').value;
    let pswd2 = document.getElementById('password-two').value;
    if(pswd2 == 0){
        password2.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i>';
        return false;
    }
    if(pswd1 !== pswd2){
        password2.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
        return false;
    }
    password2.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateForm(){
    if(validateName1() || validateName2() || validateMobile() || validatePassword1() || validatePassword2()){
        submitError.style.display = 'block';
        submitError.innerHTML = '';
        setTimeout(function(){submitError.style.display = 'none';}, 3000);
        return false;
    }
}