
document.addEventListener("DOMContentLoaded", function () {
    
    const loginForm = document.getElementById("login_form")
    const message = document.getElementById("error_message")
    const email  =  document.getElementById("email")
    const password =   document.getElementById("pass")
    const showPassword = document.getElementById("showPassword");

    /* Input Validation */

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        if(email.value ===  "hira@gmail.com" && password.value === "hira12") {
            alert("Login Successfully");
            window.location.reload();
        }
        else {
            message.style.display = "flex";
        }
    });

      /* Password Visibility */

    showPassword.addEventListener("change", function () {

        if (showPassword.checked) {
            password.type = "text"; // Show password
        } 
        
        else {
            password.type = "password"; // Hide password
        }
    });
});



