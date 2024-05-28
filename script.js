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
submit.addEventListener('click', function() {
    confirmation = confirmPassword(password.value,confirmpassword.value);

if (confirmation === true) {
    alert("Passwords match");
}
else {
    alert("Passwords don't match")
}
});