const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');

    emailInput.addEventListener('input', function(event) {
        if (emailInput.validity.valid) {
            emailError.textContent = ''; // Clear the error message
            emailError.classList.remove('error-active');
        } else {
            showError();
        }
    });

    function showError() {
        if (emailInput.validity.valueMissing) {
            emailError.textContent = 'Email is required.';
        } else if (emailInput.validity.typeMismatch) {
            emailError.textContent = 'Please enter a valid email address.';
        }
        emailError.classList.add('error-active');
    }