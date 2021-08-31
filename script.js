const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const email = document.getElementById('email');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkSubmit();
});

form.addEventListener('input', (e) => {
    checkInputs();
});

function checkInputs() {
    // get the values from the inputs
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === '') {
        //show error
        //add error class
        setErrorFor(username, 'Username cannot be blank');
    } else if (!isValidUsername(usernameValue)) {
        console.log('test');
        setErrorFor(username, 'Needs between 6 and 10 characters');        
    } else {
        setSuccessFor(username);
    }

    // else if (isValidUsername(usernameValue)){
    //     setErrorFor(username, 'Needs between 6 and 10 characters');
    // }

    if(emailValue === '') {
        //show error
        //add error class
        setErrorFor(email, 'email cannot be blank');
    } else if (!isEmail(emailValue)) {
        // add success class
        setErrorFor(email, 'Email is not valid');
    } else {
        setSuccessFor(email)
    }

    if(passwordValue === '') {
        //show error
        //add error class
        setErrorFor(password, 'Password cannot be blank');
    } else {
        // add success class
        setSuccessFor(password);
    }

    if(password2Value === '') {
        //show error
        //add error class
        setErrorFor(password2, 'Password2 cannot be blank');
    } else if (passwordValue !== password2Value) {
        setErrorFor(password2, 'Passwords do not match');
    } else {
        // add success class
        setSuccessFor(password2);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement; // .form-control
    const small = formControl.querySelector('small');

    // add error message inside small
    small.innerText = message;

    // add error class
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement; // .form-control
    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isValidUsername(username) {
    const myRegex = /[\w]{6,10}/g;
    return myRegex.test(username);
}

function checkSubmit() {
    if (username.parentElement.classList.contains('success') &&
        email.parentElement.classList.contains('success') &&
        password.parentElement.classList.contains('success') &&
        password2.parentElement.classList.contains('success')) {
            alert('Thanks for logging in!')
            location.reload();
        }
}