document.getElementById('submitButton').addEventListener('click', function() {
let name = document.getElementById('nameInput').value
let email = document.getElementById('emailInput').value
let phone = document.getElementById('phone').value

if (name === "") {
    alert("Please enter your name & surname.")
    return;
}

if (email === "" || !email.includes("@gmail.com")) {
    alert("Please enter a valid email address.")
    return;
}
if (phone === "" || phone.length !== 10 || isNaN(phone)) {
    alert("Please enter a 10-digit valid phone number.")
    return;
}
alert("Thank you for your feedback " + name)
});