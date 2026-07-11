"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Enemy_1 = __importDefault(require("../characters/enemies/enemy_classes/Enemy"));
const dictionary_enemies_1 = __importDefault(require("../dictionaries/dictionary_enemies"));
class Session {
    constructor(heroPlayer, sessionHasStarted, sessionHasEnded, wonTheSession, lostTheSession, nextSession, sessionEnemies) {
        this.lostTheSession = lostTheSession;
        this.sessionHasEnded = sessionHasEnded;
        this.wonTheSession = wonTheSession;
        this.heroPlayer = heroPlayer;
        this.sessionHasStarted = sessionHasStarted;
        this.nextSession = nextSession;
        this.sessionEnemies = sessionEnemies;
    }
    generateEnemies(numEnemies) {
        ///creates a predetermined set of enemies for a session
        //generates a random enemy
        const createRandomEnemy = () => {
            let foes = Object.values(dictionary_enemies_1.default);
            let randIndex = Math.floor(Math.random() * foes.length);
            let foe = foes[randIndex];
            let generatedFoe = new Enemy_1.default(foe.name, foe.hp, foe.atkPow);
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
        let theRandEnemy = createRandomEnemy();
        console.log("Enemy generated was:", theRandEnemy.getCharacterName());
    }
}
exports.default = Session;
//# sourceMappingURL=Session.js.map