// Royal Nickname Generator by Peter

// Variables for HTML Elements
let containerEl = document.getElementById("container");
let firstNameEl = document.getElementById("firstName");
let lastNameEl = document.getElementById("lastName");
let randomNickEl = document.getElementById("randomNick");
let allNickEl = document.getElementById("allNick");

// Global Variable
let titles = [];

// Fetch Content from nickname.txt
fetch("nickname.txt").then(convertData).then(processData);

function convertData(rawData) {
    return rawData.text();
}

function processData(stringData) {
    titles = stringData.split(/\r?\n/);
}

// Event Listener
randomNickEl.addEventListener("click", oneNick);
allNickEl.addEventListener("click", allNick);

// All or One Nick name?
function oneNick() {
    let length = 1;
    submitHandler(length);
}

function allNick() {
    let length = titles.length;
    submitHandler(titles.length);
}

// Get nicknames
function submitHandler(length) {
    // Display Nicknames
    let divStr = "";
    let firstName = firstNameEl.value;
    let lastName = lastNameEl.value;

    for (let i = 0; i < length; i++) {
        divStr += `<div>${firstName} "${randomElement(titles)}" ${lastName}</div>`;
    }

    containerEl.innerHTML = divStr;
}