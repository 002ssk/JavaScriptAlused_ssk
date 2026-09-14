// Siim Sander Kool
// Ülesanne 08
// 14.09.2026

let raha = [200, 0.2, 10, 0.01, 2, 1, 0.1, 0.02, 0.05, 100, 5, 0.5, 50, 20];

let myndid = [];
let summa = 0;
let i = 0;


while (i < raha.length) {
    let vaartus = raha[i];
    
   
    if (vaartus <= 2) {
        myndid.push(vaartus);
        summa += vaartus;
    }
    
    i++;
}

console.log(`Münte leiti kokku: ${myndid.length} tükki`);
console.log(`Müntide nimekiri:`, myndid);
console.log(`Müntide kogusumma: ${summa.toFixed(2)} €`);