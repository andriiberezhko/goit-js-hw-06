
const input = document.querySelector('#validation-input');



function onInputChange(event) {
    if (event.currentTarget.value.length === +input.getAttribute('data-length')) {
        if (input.classList.contains('invalid')) {
            input.classList.replace('invalid', 'valid');
        };

        input.classList.add('valid');
    }
    else {
        if (input.classList.contains('valid')) {
            input.classList.replace('valid', 'invalid');
        };

        input.classList.add('invalid');
    
    };
    console.log(event.currentTarget.value.length);
}

input.addEventListener('blur', onInputChange);