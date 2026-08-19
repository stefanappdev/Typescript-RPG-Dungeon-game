"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dictionary_enemies_1 = __importDefault(require("../../dictionaries/dictionary_enemies"));
const Enemy_1 = __importDefault(require("../../characters/enemies/enemy_classes/Enemy"));
async function generatorEnemies() {
    ///creates a predetermined set of enemies for a session
    //generates a random enemy
    const createRandomEnemy = () => {
        let foes = Object.values(dictionary_enemies_1.default);
        let randIndex = Math.floor(Math.random() * foes.length);
        let foe = foes[randIndex];
        let generatedFoe = new Enemy_1.default(foe.name, foe.hp, foe.hp, foe.atkPow);
        generatedFoe.setEnemyInterface(foe.characterClass, foe.characterType, foe.isHero, foe.atkSets);
        try {
            if (generatedFoe === undefined) {
                throw new Error('Something went wrong in enemy creation...');
            }
        }
        catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
        }
        return generatedFoe;
    };
    ///generates a fixed number of enemies randomly 
    const genRandNum = () => {
        let maxEnemies = 5;
        let randnum = Math.floor(Math.random() * maxEnemies);
        while (randnum < 1) {
            randnum = Math.floor(Math.random() * maxEnemies);
            if (randnum >= 1) {
                break;
            }
        }
        return randnum;
    };
    let randnum = genRandNum();
    let sessionEnemies = [];
    for (let x = 0; x < randnum; x++) {
        ///tests if enemy generation works
        let theRandEnemy = createRandomEnemy();
        sessionEnemies.push(theRandEnemy);
    }
    return await new Promise((resolve, reject) => {
        if (sessionEnemies !== undefined) {
            resolve(sessionEnemies);
        }
        else {
            reject("failed to generate session enemies");
        }
    });
}
module.exports = generatorEnemies;
//# sourceMappingURL=generatorEnemies.js.map