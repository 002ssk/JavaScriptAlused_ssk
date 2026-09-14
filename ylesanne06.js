// Siim Sander Kool
// Ülesanne 06
// 14.09.2026

let number = 5;

switch (true) {
    case (number > 0):
        console.log("Number on positiivne.");
        break;
    case (number < 0):
        console.log("Number on negatiivne.");
        break;
    default:
        console.log("Number on null.");
        break;
}

let broneeringuArv = 4;

switch (true) {
    case (broneeringuArv === 1 || broneeringuArv === 2):
        console.log("Valige laud kahele inimesele.");
        break;
    case (broneeringuArv === 3 || broneeringuArv === 4):
        console.log("Valige laud neljale inimesele.");
        break;
    case (broneeringuArv === 5 || broneeringuArv === 6):
        console.log("Valige laud kuuele inimesele.");
        break;
    case (broneeringuArv > 6):
        console.log("Valige suur laud.");
        break;
    default:
        console.log("Vigane inimeste arv.");
        break;
}