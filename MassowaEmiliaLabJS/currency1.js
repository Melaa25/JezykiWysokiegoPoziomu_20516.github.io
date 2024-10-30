let euro = 4.35;
let jen = 0.03;
let dolarUS = 4.02;
let funt = 5.21;
let koronaSzw =0.38;

function roundTwoDecimals(amount){
    return Math.round(amount * 100) /100;s
}

exports.euroToZl = function (zl) {
    return roundTwoDecimals( zl * euro);
}

exports.jenToZl = function (zl){
    return roundTwoDecimals(zl *jen);
}

exports.dolarUSToZl = function (zl){
    return roundTwoDecimals(zl * dolarUS);
}

exports.funtToZl = function(zl){
    return roundTwoDecimals(zl * funt);
}

exports.koronaToZl = function (zl){
    return roundTwoDecimals(zl * koronaSzw);
}

