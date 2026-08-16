"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Hero_1 = __importDefault(require("./Hero"));
const dictionary_heroes_1 = __importDefault(require("../../../dictionaries/dictionary_heroes"));
let Jarcher = new Hero_1.default("John", dictionary_heroes_1.default.ARCHER.hp, dictionary_heroes_1.default.ARCHER.hp, dictionary_heroes_1.default.ARCHER.atkPow);
let Mike = new Hero_1.default("Mike", dictionary_heroes_1.default.WARRIOR.hp, dictionary_heroes_1.default.WARRIOR.hp, dictionary_heroes_1.default.WARRIOR.atkPow);
Mike.setHeroInterface(dictionary_heroes_1.default.WARRIOR.characterClass, dictionary_heroes_1.default.WARRIOR.isHero, dictionary_heroes_1.default.WARRIOR.atkSets);
Jarcher.setHeroInterface(dictionary_heroes_1.default.ARCHER.characterClass, dictionary_heroes_1.default.ARCHER.isHero, dictionary_heroes_1.default.ARCHER.atkSets);
if (Jarcher.isAlive()) {
    console.log(`${Jarcher.getCharacterName()} is alive!`);
}
if (Jarcher.isAHero()) {
    console.log(`${Jarcher.getCharacterName()} is a Hero!`);
}
console.log(`what's your class?`, Mike.getCharacterClass());
console.log(`your HP:`, Mike.getCurrentHP());
console.log("Your abilities are?", Mike.getRegularAtks(), Mike.getSpecialAtks());
if (Mike.isAlive()) {
    console.log(`${Mike.getCharacterName()} is alive!`);
}
if (Mike.isAHero()) {
    console.log(`${Mike.getCharacterName()} is a Hero!`);
}
Mike.setHeroCurrentHP(0);
console.log(`what's your class?`, Mike.getCharacterClass());
console.log(`your HP:`, Mike.getCurrentHP());
console.log("Your abilities are?", Mike.getRegularAtks(), Mike.getSpecialAtks());
if (Mike.isAlive() === false) {
    console.log(`The Hero ${Mike.getCharacterName()} has fallen`);
}
//# sourceMappingURL=testHeroes.js.map