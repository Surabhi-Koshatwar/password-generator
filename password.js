const keys = {
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    number: "0123456789",
    symbol: "!@#$%^&*()_+~\\`|}{[]:;?><,./-="
}

const getKey = [
    function includeUpperCase() {
        return keys.upperCase[Math.floor(Math.random() * keys.upperCase.length)];
    },
    function includeLowerCase() {
        return keys.lowerCase[Math.floor(Math.random() * keys.lowerCase.length)];
    },
    function includeNumbers() {
        return keys.number[Math.floor(Math.random() * keys.number.length)];
    },
    function includeSpecialCharacters() {
        return keys.symbol[Math.floor(Math.random() * keys.symbol.length)];
    }
];

function createPassword() {
    const upper = document.getElementById("includeUpperCase").checked;
    const lower = document.getElementById("includeLowerCase").checked;
    const number = document.getElementById("includeNumbers").checked;
    const symbol = document.getElementById("includeSpecialCharacters").checked;
    if (upper + lower + number + symbol === 0) {
        alert("Please check atleast one box!");
        return;
    }
    const passwordBox = document.getElementById("passwordBox");
    const length = document.getElementById("length");
    let password = "";
    while (length.value > password.length) {
        let keyToAdd = getKey[Math.floor(Math.random() * getKey.length)];
        let isChecked = document.getElementById(keyToAdd.name).checked;
        if (isChecked) {
            password += keyToAdd();
        }
    }
    passwordBox.innerHTML = password;
}