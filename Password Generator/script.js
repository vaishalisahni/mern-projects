const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const symbol = "!@#$%&?";

function getPasswordLength() {
    const lengthInput = document.getElementById("length").value;
    if(lengthInput==null || lengthInput=="") return 8;
    else return lengthInput;
}

function passgen(event) {
    event.preventDefault();
    const length = getPasswordLength();
    const output = document.getElementById("output");

    if (length < 4) {
        output.innerText = "Your password should be at least 4 characters long.";
    } else {
        let pass = "";
        while (pass.length < length) {
            pass += upperCase[Math.floor(Math.random() * upperCase.length)];
            if (pass.length < length) pass += lowerCase[Math.floor(Math.random() * lowerCase.length)];
            if (pass.length < length) pass += number[Math.floor(Math.random() * number.length)];
            if (pass.length < length) pass += symbol[Math.floor(Math.random() * symbol.length)];
        }
        output.innerText = pass.slice(0, length);
    }
}

document.getElementById("form").addEventListener("submit", passgen);
