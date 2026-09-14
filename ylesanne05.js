// Siim Sander Kool
// Ülesanne 05
// 07.09.2026

let temp = 20;

if (temp > 25) {
    console.log("Väga kuum ilm!");
} else if (temp >= 15 && temp <= 25) {
    console.log("Mõnus temperatuur");
} else {
    console.log("Jahe ilm");
}

let kasutajanimi = "admin";

let teade = (kasutajanimi === "admin") ? "Tere, administraator!" : "Tere, külaline!";
console.log(teade);

let piletityyp = "taispilet";
let vanus = 20;
let hind = 0;

if (piletityyp === "taispilet") {
    if (vanus < 18) {
        hind = 10;
    } else if (vanus >= 18 && vanus <= 64) {
        hind = 20;
    } else {
        hind = 15;
    }
} else if (piletityyp === "sooduspilet") {
    if (vanus < 18 || vanus >= 65) {
        hind = 8;
    } else {
        hind = 15;
    }
}

console.log(`Pileti hind: ${hind} eurot`);