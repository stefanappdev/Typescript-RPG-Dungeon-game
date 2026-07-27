"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Enemy_1 = __importDefault(require("./Enemy"));
const dictionary_enemies_1 = __importDefault(require("../../../dictionaries/dictionary_enemies"));
let orc = new Enemy_1.default('orc', dictionary_enemies_1.default.ORC.hp, dictionary_enemies_1.default.ORC.atkPow);
let mobgoblin = new Enemy_1.default("Mobgoblin", dictionary_enemies_1.default.GOBLIN.hp, dictionary_enemies_1.default.GOBLIN.atkPow);
orc.setEnemyInterface(dictionary_enemies_1.default.ORC.characterClass, dictionary_enemies_1.default.ORC.characterType, dictionary_enemies_1.default.ORC.isHero, dictionary_enemies_1.default.ORC.atkSets);
mobgoblin.setEnemyInterface(dictionary_enemies_1.default.GOBLIN.characterClass, dictionary_enemies_1.default.GOBLIN.characterType, dictionary_enemies_1.default.GOBLIN.isHero, dictionary_enemies_1.default.GOBLIN.atkSets);
if (mobgoblin.isAlive()) {
    console.log(`${mobgoblin.getCharacterName()} is alive!`);
}
if (mobgoblin.isAHero()) {
    console.log(`${mobgoblin.getCharacterName()} is a Hero!`);
}
console.log(`what's your class?`, mobgoblin.getCharacterClass());
console.log(`your HP:`, mobgoblin.getCurrentHP());
console.log("Your abilities are?", mobgoblin.getRegularAtks(), mobgoblin.getSpecialAtks());
if (mobgoblin.isAlive()) {
    console.log(`${mobgoblin.getCharacterName()} is alive!`);
}
if (mobgoblin.isAHero()) {
    console.log(`${mobgoblin.getCharacterName()} is a Hero!`);
}
mobgoblin.setEnemyHP(0);
if (mobgoblin.isDead()) {
    console.log(`The enemy ${mobgoblin.getCharacterName()} has fallen`);
}
console.log(`what's your class?`, orc.getCharacterClass());
console.log(`your HP:`, orc.getCurrentHP());
console.log("Your abilities are?", orc.getRegularAtks(), orc.getSpecialAtks());
//# sourceMappingURL=testEnemy.js.map