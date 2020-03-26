/* 9. Create a password checker from a prompt which will check to see is a password is strong enough.
Min 5 characters, max 20, 1 number. */

$('#start-task9').click(function () {
    let password;
    while (true) {
        password = prompt("Enter your password");
        if (password.length < 5) {
            alert("The password is too short");
        } else if (password.length > 20) {
            alert("The password is too long");
        } else if (!(/\d/g).test(password)) {
            alert("The password must contain at least 1 number");
        }
        else {
            alert("The password is valid");
            break
        }
    }
});