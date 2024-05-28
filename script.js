// Create a function to check password and confirm password
function confirmPassword(str1,str2) {
    if (str1 === str2) {
        return true;
    }
    else {
        return false;
    }   
}
const password = document.getElementById("password");
const confirmpassword = document.getElementById("confirmpassword");
const submit = document.getElementById("submit");
const text_field =document.getElementById("text_field")
confirmpassword.addEventListener('input', function() {
    confirmation = confirmPassword(password.value,confirmpassword.value);

if (confirmation === true) {
    text_field.textContent = "Passwords match";
    text_field.style.color = "green";
    confirmpassword.style.borderColor = "green";
    password.style.borderColor = "green";
}
else {
    text_field.textContent = "Passwords don't match";
    text_field.style.color = "red";
    confirmpassword.style.borderColor = "red";
    confirmpassword.style.borderColor = "red";
}
});