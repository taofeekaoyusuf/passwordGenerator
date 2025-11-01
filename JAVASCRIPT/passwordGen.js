// ===== CHARACTER SETUP =====
const allChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=[]{}|;:'\",.<>?/".split('');
const numbers = "0123456789".split('');
const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split('');
const symbols = "!@#$%^&*()_-+=[]{}|;:'\",.<>?/".split('');
const alphaNum = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split('');
const alphaSym = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_-+=[]{}|;:'\",.<>?/".split('');
const numSym = "0123456789!@#$%^&*()_-+=[]{}|;:'\",.<>?/".split('');

let genPasswordButton = document.getElementById("gen-btn");
let leftDisplay = document.getElementById("left-display");
let rightDisplay = document.getElementById("right-display");

// ===== EVENT LISTENER =====
genPasswordButton.addEventListener("click", function() {
    let leftDisplayCharacters = "";
    let rightDisplayCharacters = "";

    // Get selected password type
    const selectedType = document.querySelector('input[name="taoy"]:checked');
    if (!selectedType) {
        alert("Please select a Password Type to generate!");
        return;
    }

    // Choose character set based on selected type
    let charactersArray;
    switch (selectedType.value) {
        case "NumbersOnly":
            charactersArray = numbers;
            break;
        case "AlphabetsOnly":
            charactersArray = alphabets;
            break;
        case "SymbolsOnly":
            charactersArray = symbols;
            break;
        case "Alphabets+Numbers":
            charactersArray = alphaNum;
            break;
        case "Alphabets+Symbols":
            charactersArray = alphaSym;
            break;
        case "Symbols+Numbers":
            charactersArray = numSym;
            break;
        default:
            charactersArray = allChars;
    }

    // Get password length
    const selectedLength = document.querySelector('input[name="radio"]:checked');
    if (!selectedLength) {
        alert("Please select a Password Length!");
        return;
    }

    const limit = Number(selectedLength.value);

    // Generate two random passwords
    for (let i = 0; i < limit; i++) {
        const leftIndex = Math.floor(Math.random() * charactersArray.length);
        const rightIndex = Math.floor(Math.random() * charactersArray.length);
        leftDisplayCharacters += charactersArray[leftIndex];
        rightDisplayCharacters += charactersArray[rightIndex];
    }

    // Display the passwords
    leftDisplay.textContent = leftDisplayCharacters;
    rightDisplay.textContent = rightDisplayCharacters;
});

// ===== COPY FUNCTIONS =====
function leftCopy() {
    const text = document.getElementById("left-display").textContent;
    if (text) {
        navigator.clipboard.writeText(text);
        alert("Left password copied!");
    }
}

function rightCopy() {
    const text = document.getElementById("right-display").textContent;
    if (text) {
        navigator.clipboard.writeText(text);
        alert("Right password copied!");
    }
}
