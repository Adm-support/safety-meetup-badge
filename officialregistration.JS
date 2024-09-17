document.getElementById('badgeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const company = document.getElementById('company').value;
    const phoneNumber = document.getElementById('phoneNumber').value;

    if (fullName && email && company && phoneNumber) {
        alert('Registration successful! Thank you for registering.');
    } else {
        alert('Please fill in all fields before submitting.');
    }
});
