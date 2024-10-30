
let math1 = require('./mathModule1');

console.log('1 wersja modułu (z obiektu exports):');
console.log('Dodawanie 5 + 3:', math1.add(5, 3));
console.log('Odejmowanie 5 - 3:', math1.subtract(5, 3));
console.log('Mnożenie 5 * 3:', math1.multiply(5, 3));
console.log('Dzielenie 5 / 3:', math1.divide(5, 3));
console.log('Potęgowanie 5^3:', math1.power(5, 3));

console.log('\n2 wersja modułu (podejście obiektowe):');
let MathModule = require('./mathModule2');
let math2 = new MathModule();

console.log('Dodawanie 5 + 3:', math2.add(5, 3));
console.log('Odejmowanie 5 - 3:', math2.subtract(5, 3));
console.log('Mnożenie 5 * 3:', math2.multiply(5, 3));
console.log('Dzielenie 5 / 3:', math2.divide(5, 3));
console.log('Potęgowanie 5^3:', math2.power(5, 3));
