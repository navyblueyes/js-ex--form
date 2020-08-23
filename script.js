const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;

//Functions
function validateForm() {
    isValid = form.checkValidity();
    console.log(isValid);
    // Message for Error
    if (!isValid) {
        message.textContent = 'Please fill out all fields.';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        return;
    }
    // Message for matching passwords
    if (password1El.value === password2El.value) {
        passwordsMatch = 'true';
        password1El.style.borderColor = 'green';
        password2El.style.borderColor = 'green';
    } else {
        passwordsMatch = 'false';
        message.textContent = 'Passwords do NOT match.';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        password1El.style.borderColor = 'red';
        password2El.style.borderColor = 'red';
        return;
    }
    // If form is valid
    if (isValid && passwordMatch) {
        message.textContent = 'Successfully registered!';
        message.style.color = 'green';
        messageContainer.style.borderColor = 'green';
    }
}

function storeFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value
    };
    //TODO: send info to backend
    console.log(user);
}

//Event Functions
function processFormData(e) {
    e.preventDefault();

    //Validate Form
    validateForm();

    //Submit Data if Valid
    if (isValid &&  passwordsMatch) {
        storeFormData();
    }
}


/* Event Listener */
form.addEventListener('submit', processFormData)