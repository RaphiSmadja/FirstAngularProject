"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pokemon = /** @class */ (function () {
    function Pokemon(name, speed, power, life) {
        this.name = name;
        this.speed = speed;
        this.power = power;
        this.life = life;
    }
    Pokemon.prototype.displayPokemon = function () {
        console.log(this.name + ' - ' + this.speed);
    };
    Pokemon.prototype.compareSpeedOfPokemons = function (poke) {
        return this.speed > poke.speed ? this : poke;
    };
    Pokemon.prototype.compareLifesOfPokemons = function (poke) {
        return this.life > poke.life ? this : poke;
    };
    Pokemon.prototype.comparePowerOfPokemons = function (poke) {
        return this.power > poke.power ? this : poke;
    };
    Pokemon.prototype.attack = function (poke) {
        poke.life -= this.power;
        return poke.life;
    };
    Pokemon.prototype.getSpeed = function () {
        return this.speed;
    };
    Pokemon.prototype.getPower = function () {
        return this.power;
    };
    Pokemon.prototype.getLife = function () {
        return this.life;
    };
    Pokemon.prototype.winnerAndLooser = function (poke) {
        if (this.life <= 0) {
            console.log(this.name + ' est le perdant ' + poke.name + ' est le vainqueur');
        }
        else {
            console.log(this.name + ' est le perdant ' + poke.name + ' est le vainqueur');
        }
    };
    return Pokemon;
}());
exports.Pokemon = Pokemon;
