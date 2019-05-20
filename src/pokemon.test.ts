import {Pokemon} from './Pokemon';

let pokemon1 = new Pokemon('pikachu', 10, 2, 21);
let pokemon2 = new Pokemon('raichu', 11, 3, 20);

test('compare speed of poke1 and poke2', () => {
  expect(pokemon1.compareSpeedOfPokemons(pokemon2)).toBe(pokemon2);
});

test('compare life of poke1 and poke2', () => {
  expect(pokemon1.compareLifesOfPokemons(pokemon2)).toBe(pokemon1);
});

test('compare power of poke1 and poke2', () => {
  expect(pokemon1.comparePowerOfPokemons(pokemon2)).toBe(pokemon2);
});

test('attack', () => {
	let lifePoke2 = pokemon2.getLife();
	let powerPoke1 = pokemon1.getPower();
	lifePoke2 -= powerPoke1;
  expect(pokemon1.attack(pokemon2)).toBe(lifePoke2);
});