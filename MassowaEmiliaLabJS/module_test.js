let currency = require('./currency1');

console.log('1 wersja modulu:')
console.log('50 euro odpowiada następującej ilości polskich złotówek:');
console.log(currency.euroToZl(50));
console.log('50 jenów odpowiada następującej ilości polskich złotówek:');
console.log(currency.jenToZl(50));
console.log('50 dolarów amerykańskich odpowiada następującej ilości polskich złotówek:');
console.log(currency.dolarUSToZl(50));
console.log('50 funtow brytyjskich odpowiada następującej ilości polskich złotówek:');
console.log(currency.funtToZl(50));
console.log('50 koron szwedzkich odpowiada następującej ilości polskich złotówek:');
console.log(currency.koronaToZl(50));

console.log('\n2 wersja modulu:')
let Currency = require ('./currency2');
let euro = 4.35;
let jen = 0.03;
let dolarUS = 4.02;
let funt = 5.21;
let koronaSzw =0.38;
let currency1 = new Currency (euro, jen, dolarUS, funt, koronaSzw);
console.log('Euro na zl:');
console.log(currency1.euroToZL(50));
console.log('Jen na zl: ');
console.log(currency1.jenToZL(50));
console.log('Dolar amerykanski na zl: ');
console.log(currency1.dolarToZL(50));
console.log('Funt brytyjski na zl: ');
console.log(currency1.funtToZL(50));
console.log('Korona szwedzka na zl: ');
console.log(currency1.koronaToZL(50));