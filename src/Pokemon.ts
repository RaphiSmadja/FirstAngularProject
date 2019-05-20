export class Pokemon {

	constructor(private name: string, private speed: number, private power: number, private life: number){}

	displayPokemon():void {
		console.log(this.name + ' - ' + this.speed);
	}

	compareSpeedOfPokemons(poke: Pokemon) {
		return this.speed > poke.speed ? this : poke;
	}

	compareLifesOfPokemons(poke: Pokemon) {
		return this.life > poke.life ? this : poke;
	}

	comparePowerOfPokemons(poke: Pokemon) {
		return this.power > poke.power ? this : poke;
	}

	attack(poke: Pokemon) {
		poke.life -= this.power;
		return poke.life;
	}

	getSpeed(){
		return this.speed;
	}
	
	getPower(){
		return this.power;
	}

	getLife(){
		return this.life;
	}

	winnerAndLooser(poke: Pokemon): void{
		if (this.life <= 0) {
			console.log(this.name + ' est le perdant ' + poke.name + ' est le vainqueur');
		} else {
			console.log(this.name + ' est le perdant ' + poke.name + ' est le vainqueur');
		}
	}
}