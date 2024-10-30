let MathModule = function () {};

MathModule.prototype.add = function(a, b) {
    return a + b;
};

MathModule.prototype.subtract = function(a, b) {
    return a - b;
};

MathModule.prototype.multiply = function(a, b) {
    return a * b;
};

MathModule.prototype.divide = function(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
};

MathModule.prototype.power = function(a, b) {
    return Math.pow(a, b);
};

module.exports = MathModule;
