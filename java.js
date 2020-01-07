var upper = "ABCDEFHGIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var number = "0123456789";
var symbol = "!@#$%^&*";
function genPwd() {
    var chars = '';
    var password = '';
    var len = document.getElementById("length").value;

    if ( document.getElementById("uppercase").checked ) {
        chars += upper;
    }
    if ( document.getElementById("lowercase").checked ) {
        chars += lower;
    }
    if ( document.getElementById("numbers").checked ) {
        chars += number;
    }
    if ( document.getElementById("symbols").checked ) {
        chars += symbol;
    }

    if ( chars == '' ) {
        password = 'Please select criteria(s)';
    }
    else {
        for ( var i = 0; i < len; ++i ) {
            password += chars[Math.floor(Math.random() * chars.length)];
            }
    }

    document.getElementById("password").value = password;
}