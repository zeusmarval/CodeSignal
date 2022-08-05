function checkPalindrome(value) {
    if ((value = value.split("").reverse().join(""))) {
        return true;
    } else {
        return false;
    }
}

checkPalindrome("hola");
