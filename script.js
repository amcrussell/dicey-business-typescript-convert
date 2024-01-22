"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jquery_1 = require("jquery");
var allDie = [];
var die = /** @class */ (function () {
    function die() {
        var _this = this;
        this.value = Math.floor(Math.random() * 6) + 1;
        this.dieAct = (0, jquery_1.default)("<div class=\"die\"><p class=\"text\">".concat(this.value, "</p></div>"));
        (0, jquery_1.default)('.dieContainer').append(this.dieAct);
        this.dieAct.children('.text').text(this.value);
        this.roll();
        (0, jquery_1.default)(this.dieAct).on('click', function () { return _this.roll(); });
        (0, jquery_1.default)(this.dieAct).on('dblclick', function () { return _this.remove(); });
    }
    die.prototype.roll = function () {
        this.value = Math.floor(Math.random() * 6) + 1;
        this.dieAct.children('p.text').text(this.value);
    };
    die.prototype.val = function () {
        return this.value;
    };
    die.prototype.remove = function () {
        delete allDie[allDie.indexOf(this)];
        this.dieAct.empty();
        this.dieAct.remove();
    };
    return die;
}());
(0, jquery_1.default)('#generate').on('click', function () {
    var btn = new die();
    allDie.push(btn);
});
(0, jquery_1.default)('#roll').on('click', function () {
    allDie.forEach(function (dice) { return dice.roll(); });
});
(0, jquery_1.default)('#sum').on('click', function () {
    var diceVal = 0;
    allDie.forEach(function (dice) { return (diceVal += dice.val()); });
    alert("Value of dice is ".concat(diceVal));
});
