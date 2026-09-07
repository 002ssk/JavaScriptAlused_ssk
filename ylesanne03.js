// Siim Sander Kool
// Ülesanne 03
// 07.09.2026


let kaugus = 150; 
let kiirus = 90;  

let sõiduAeg = kaugus / kiirus;
console.log(`Sõidu aeg: ${sõiduAeg.toFixed(2)} tundi`);


let postitusiKokku = 137;
let postitusiLehel = 10;

let lehekülgi = Math.ceil(postitusiKokku / postitusiLehel);
let viimaselLehel = postitusiKokku % postitusiLehel;

console.log(`Postituste kuvamiseks on vaja ${lehekülgi} lehekülge.`);
console.log(`Viimasel leheküljel on ${viimaselLehel} postitust.`);


let võimsusW = 400; 
let elektriHindSenti = 9.69; 


let elektriHindEurodes = elektriHindSenti / 100;


let voolutarbimineKWh = võimsusW / 1000;


let töökuluEurodes = voolutarbimineKWh * elektriHindEurodes;

console.log(`Serveri töös hoidmine ühe tunni jooksul maksab ${töökuluEurodes.toFixed(4)} €.`);