
import $ from 'jquery';

let allDie: die[] = [];
class die {
    value: number;
    dieAct: any;

    constructor() {

        this.value = Math.floor(Math.random() * 6) + 1;
        this.dieAct = $(`<div class="die"><p class="text">${this.value}</p></div>`)
        $('.dieContainer').append(this.dieAct);
        this.dieAct.children('.text').text(this.value)
        this.roll();
        $(this.dieAct).on('click', () => this.roll());
        $(this.dieAct).on('dblclick', () => this.remove());

    }

    roll() {

        this.value = Math.floor(Math.random() * 6) + 1;
        this.dieAct.children('p.text').text(this.value);

    }

    val() {

        return this.value;

    }

    remove(){

        delete allDie[allDie.indexOf(this)];
        this.dieAct.empty()
        this.dieAct.remove();

    }

}

$('#generate').on('click', function () {
    let btn = new die();
    allDie.push(btn);


})


$('#roll').on('click', function () {

    allDie.forEach((dice) => dice.roll())


})

$('#sum').on('click', function () {

    let diceVal = 0;

    allDie.forEach((dice) => (diceVal += dice.val()))

    alert(`Value of dice is ${diceVal}`);

})