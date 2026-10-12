// Siim Sander Kool
// Ülesanne 09
// 12.10.2026


function kuvaNimiKlassikaline() {
    console.log("Siim Sander Kool");
}

const kuvaNimiNool = () => {
    console.log("Siim Sander Kool");
};

kuvaNimiKlassikaline();
kuvaNimiNool();


function kuupaevEesti(kuupaevString) {
    const kuud = [
        "jaanuar", "veebruar", "märts", "aprill", "mai", "juuni",
        "juuli", "august", "september", "oktoober", "november", "detsember"
    ];
    
    // Tükeldame kuupäeva "19.07.23" punkti kohalt
    const osad = kuupaevString.split(".");
    const paev = parseInt(osad[0], 10);
    const kuuIndeks = parseInt(osad[1], 10) - 1;
    const aasta = osad[2];

    console.log(`${paev}. ${kuud[kuuIndeks]} 20${aasta}`);
}

kuupaevEesti("19.07.23");


function arvutaArvud(...arvud) {
    const koguarv = arvud.length;
    if (koguarv === 0) {
        return { koguarv: 0, keskmine: 0 };
    }
    const summa = arvud.reduce((acc, curr) => acc + curr, 0);
    const keskmine = summa / koguarv;
    return { koguarv, keskmine };
}

const tulemus = arvutaArvud(10, 20, 30, 40, 50);
console.log(`Arvude koguarv: ${tulemus.koguarv}, Keskmine: ${tulemus.keskmine}`);


const salajaneSonum = (sonum) => {
    return sonum.replace(/[aeiouõäöüAEIOUÕÄÖÜ]/g, "*");
};

console.log(salajaneSonum("Tere tulemast JavaScripti tundi!"));


const leiaUnikaalsedNimed = (nimed) => {
    return [...new Set(nimed)];
};

const nimedeMassiiv = ["Kati", "Mati", "Kati", "Mari", "Mati", "Jüri"];
console.log(leiaUnikaalsedNimed(nimedeMassiiv));