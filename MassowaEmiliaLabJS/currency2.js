let Currency = function (euro, jen, dolar, funt, korona) {
    this.euro = euro;
    this.jen = jen;
    this.dolar = dolar;
    this.funt = funt;
    this.korona = korona;
}

Currency.prototype.roundTwoDecimals = function (amount){
    return Math.round(amount * 100)/100;
}
Currency.prototype.euroToZL = function(zl){
    return this.roundTwoDecimals(zl * this.euro);
}
Currency.prototype.jenToZL = function(zl){
    return this.roundTwoDecimals(zl * this.jen);
}
Currency.prototype.dolarToZL = function(zl){
    return this.roundTwoDecimals(zl * this.dolar);
}
Currency.prototype.funtToZL = function(zl){
    return this.roundTwoDecimals(zl * this.funt);
}
Currency.prototype.koronaToZL = function(zl){
    return this.roundTwoDecimals(zl * this.korona);
}

module.exports=exports = Currency;