const fullName = document.querySelector('#full_name');
const email = document.querySelector('#email');
const phoneNum = document.querySelector('#phone_number');
const subject = document.querySelector('#subject');
const theMessage = document.querySelector('#your_message');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

const name_error = document.querySelector('#name_error');
const email_error = document.querySelector('#email_error');
const tel_error = document.querySelector('#tel_error');
const subject_error = document.querySelector('#subject_error');
const yourMessage_error = document.querySelector('#yourMessage_error');

form.addEventListener('submit', (e) => {
    const email_check = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (fullName.value === '' || fullName.value == null) {
        e.preventDefault();
        name_error.innerHTML = 'Name is required*';
    } else {
        name_error.innerHTML = '';
    }


    if (!email_check.test(email.value)) {
        e.preventDefault();
        email_error.innerHTML = 'Valid Email is required*';
    } else {
        email_error.innerHTML = '';
    }


    if (phoneNum.value.length != 10 || phoneNum.value == null) {
        e.preventDefault();
        tel_error.innerHTML = 'Phone number must be 10 numbers*'
    }
    else {
        tel_error.innerHTML = '';
    }

    if (subject.value === '' || subject.value.length < 3) {
        e.preventDefault();
        subject_error.innerHTML = 'Subject need to be atleast 3 letters*'
    }
    else {
        subject_error.innerHTML = '';
    }

    if (theMessage.value === '' || theMessage.value.length < 2) {
        e.preventDefault();
        yourMessage_error.innerHTML = 'Message need to be atleast 2 letters*';
    }
    else {
        yourMessage_error.innerHTML = '';
    }

});
