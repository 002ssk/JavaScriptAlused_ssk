// Siim Sander Kool
// Ülesanne 02
// 07.09.2026

// 1. Kellaaeg
let tunnid = 2;
let minutid = 38;
let sekundid = 59;
let kellaaeg = tunnid + ":" + minutid + ":" + sekundid + "PM";
console.log(kellaaeg);

// 2. Tsitaat lause sees
let tsitaat = "Kes otsib, see leiab.";
let autor = "Eesti vanasõna";
let tsitaadiLause = 'Kuulus tsitaat: "' + tsitaat + '" - ' + autor;
console.log(tsitaadiLause);

// 3. Mallide kasutamine (Eesnimed ja perenimi)
let eesnimi1 = "Siim";
let eesnimi2 = "Sander";
let perenimi = "Kool";

// Nimetähtede moodustamine
let esitahed = `${eesnimi1[0]}.${eesnimi2[0]}.${perenimi[0]}.`;
let nimetahedLause = `${eesnimi1} ${eesnimi2} ${perenimi} nimetähed on ${esitahed}`;
console.log(nimetahedLause);

// 4. Perenime pikkus
let nimiKoma = `${perenimi}, ${eesnimi1} ${eesnimi2}`; // "Kool, Siim Sander"
let komaIndeks = nimiKoma.indexOf(",");
let eraldatudPerenimi = nimiKoma.slice(0, komaIndeks);
let suurPerenimi = eraldatudPerenimi.toUpperCase();

console.log("Perenimi suurtähtedega:", suurPerenimi);
console.log("Perenime pikkus:", suurPerenimi.length);

// 5. E-posti aadressi muutmine
let epost = "siimsander.kool@netlog.com";
let muudetudEpost = epost.replace("netlog", "gmail");
console.log(muudetudEpost);

// 6. Andmerida analüüs
let andmerida = "1,Siim Sander,Kool,siimsander.kool@gmail.com,Male,40.19.226.175";
let andmed = andmerida.split(",");

let täisEpost = andmed[3];
let ipAadress = andmed[5];
let kasutajanimi = täisEpost.split("@")[0];

console.log(`IP-aadress: ${ipAadress} ja e-mailist kasutajanimi: ${kasutajanimi}`);