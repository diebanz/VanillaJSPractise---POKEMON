"strict mode";

class Pokemon {
	constructor(name, health, magic) {
		this.name = name;
		this.health = health;
		this.magic = magic;
		this.skill = [];
	}

	// learnAttackSkill(attack) {
	//     return this.skill.push(attack);
	// }

	// showStatus() {
	//     console.log(
	//         `${this.name} status \n health: ${this.health} \n magic: ${this.magic}`
	//     );
	// }

	// attack(index, pokemon) {
	//     if (this.health <= 0) {
	//         console.log(`${this.name} is already dead!`);
	//     } else if (this.magic - this.skill[0].amountOfMagic >= 0) {
	//         console.log(
	//             `${this.name} launched skill ${this.skill[index].attackName} successfully!`
	//         );
	//         console.log(
	//             `${pokemon.name} got ${this.skill[index].damage} damage`
	//         );
	//         pokemon.health -= this.skill[index].damage;
	//         this.magic -= this.skill[index].amountOfMagic;
	//     } else {
	//         console.log(`Not enough magic, cannot launch attack!`);
	//     }

	//     if (pokemon.health <= 0) {
	//         console.log(`${pokemon.name} got killed!`);
	//     }
	// }

	// getMagic() {
	//     console.log(`${this.name} got 20 magic back`);
	//     this.magic += 20;
	// }
}

Pokemon.prototype.learnAttackSkill = function (attack) {
	return this.skill.push(attack);
};

Pokemon.prototype.showStatus = function () {
	console.log(
		`${this.name} status \n health: ${this.health} \n magic: ${this.magic}`
	);
};

Pokemon.prototype.attack = function (index, pokemon) {
	if (this.health <= 0) {
		console.log(`${this.name} is already dead!`);
	} else if (this.magic - this.skill[0].amountOfMagic >= 0) {
		console.log(
			`${this.name} launched skill ${this.skill[index].attackName} successfully!`
		);
		console.log(`${pokemon.name} got ${this.skill[index].damage} damage`);
		pokemon.health -= this.skill[index].damage;
		this.magic -= this.skill[index].amountOfMagic;
	} else {
		console.log(`Not enough magic, cannot launch attack!`);
	}

	if (pokemon.health <= 0) {
		console.log(`${pokemon.name} got killed!`);
	}
};

Pokemon.prototype.getMagic = function () {
	console.log(`${this.name} got 20 magic back`);
	this.magic += 20;
};

class AttackSkill {
	constructor(attackName, damage, amountOfMagic) {
		this.attackName = attackName;
		this.damage = damage;
		this.amountOfMagic = amountOfMagic;
	}
}

// Creating 1st Pokemon

let lightning = new AttackSkill("lightning", 40, 30);
let pikachu = new Pokemon("pikachu", 120, 80);
pikachu.learnAttackSkill(lightning);
console.log(pikachu);

// Creating 2nd Pokemon
let poisonSeed = new AttackSkill("poison seed", 20, 20);
let bulbasaur = new Pokemon("bulbasaur", 95, 105);
bulbasaur.learnAttackSkill(poisonSeed);
console.log(bulbasaur);

pikachu.attack(0, bulbasaur);
bulbasaur.attack(0, pikachu);
pikachu.showStatus();
bulbasaur.showStatus();
pikachu.attack(0, bulbasaur);
pikachu.attack(0, bulbasaur);
pikachu.getMagic();
pikachu.attack(0, bulbasaur);
bulbasaur.attack(0, pikachu);
