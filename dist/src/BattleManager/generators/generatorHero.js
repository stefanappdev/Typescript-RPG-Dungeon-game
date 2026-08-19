"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Hero_1 = __importDefault(require("../../characters/Heroes/hero_classes/Hero"));
const dictionary_heroes_1 = __importDefault(require("../../dictionaries/dictionary_heroes"));
const readLine = require('readline/promises');
const RLI = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});
/*complete this hero generator*/
async function generatorHero() {
    const initializeHero = async () => {
        const name = await RLI.question(`Enter your hero's name:`);
        console.log(`Class options\n1.Warrior\n2.Mage\n3.Archer\n`);
        const classChoice = await RLI.question("Choose you hero's class:");
        const choice = parseInt(classChoice);
        let H;
        if (choice === 1) {
            H = new Hero_1.default(name, dictionary_heroes_1.default.WARRIOR.hp, dictionary_heroes_1.default.WARRIOR.hp, dictionary_heroes_1.default.WARRIOR.atkPow);
            H.setHeroInterface(dictionary_heroes_1.default.WARRIOR.characterClass, dictionary_heroes_1.default.WARRIOR.isHero, dictionary_heroes_1.default.WARRIOR.atkSets);
        }
        else if (choice === 2) {
            H = new Hero_1.default(name, dictionary_heroes_1.default.MAGE.hp, dictionary_heroes_1.default.MAGE.hp, dictionary_heroes_1.default.MAGE.atkPow);
            H.setHeroInterface(dictionary_heroes_1.default.MAGE.characterClass, dictionary_heroes_1.default.MAGE.isHero, dictionary_heroes_1.default.MAGE.atkSets);
        }
        else if (choice === 3) {
            H = new Hero_1.default(name, dictionary_heroes_1.default.ARCHER.hp, dictionary_heroes_1.default.ARCHER.hp, dictionary_heroes_1.default.ARCHER.atkPow);
            H.setHeroInterface(dictionary_heroes_1.default.ARCHER.characterClass, dictionary_heroes_1.default.ARCHER.isHero, dictionary_heroes_1.default.ARCHER.atkSets);
        }
        RLI.close();
        return new Promise((resolve, reject) => {
            if (H != undefined) {
                resolve(H);
            }
            else {
                reject(() => {
                });
            }
        });
    };
    try {
        const heroCreationResult = await initializeHero();
        return heroCreationResult;
    }
    catch (Err) {
        throw new Error('Hero creation failed');
    }
}
module.exports = generatorHero;
//# sourceMappingURL=generatorHero.js.map