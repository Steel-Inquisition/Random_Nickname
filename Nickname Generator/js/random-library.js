// Library of Random Functions

// return a random decimal between low (inclusive) and high (exclusive)
function randomDec(low, high) {
    return Math.random() * (high - low) + low;
}
// return a random interger between low (inclusive) and high (exclusive)
function randomInt(low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}

// return a random rgb string
function randomRGB() {
    let r = randomInt(0, 256);
    let g = randomInt(0, 256);
    let b = randomInt(0, 256);
    return "rgb(" + r + ", "  + g + ", " + b + ")";
}

// return a random array element
function randomElement(titles) {
    return titles[randomInt(0, titles.length)];
}