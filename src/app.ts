import {Pokemon} from './Pokemon';

let pokemon1 = new Pokemon('pikachu', 10, 2, 20);
let pokemon2 = new Pokemon('raichu', 11, 3, 20);

while(pokemon1.getLife() > 0 && pokemon2.getLife() > 0){
	if (pokemon1 === pokemon1.compareSpeedOfPokemons(pokemon2)) {
		pokemon1.attack(pokemon2);
		pokemon2.attack(pokemon1);
	} else {
		pokemon2.attack(pokemon1);
		pokemon1.attack(pokemon2);
	}
	console.log("pokemon1.life - " +pokemon1.getLife());
	console.log("pokemon2.life - " +pokemon2.getLife());
}
pokemon1.winnerAndLooser(pokemon2);