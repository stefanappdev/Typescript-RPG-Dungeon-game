"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dictionary_enemies_1 = __importDefault(require("../dictionaries/dictionary_enemies"));
const Goblin_1 = __importDefault(require("../characters/enemies/enemy_classes/Goblin"));
const Orc_1 = __importDefault(require("../characters/enemies/enemy_classes/Orc"));
class Session {
    constructor(heroPlayer, sessionHasStarted, sessionHasEnded, wonTheSession, lostTheSession) {
        this.lostTheSession = lostTheSession;
        this.sessionHasEnded = sessionHasEnded;
        this.wonTheSession = wonTheSession;
        this.heroPlayer = heroPlayer;
        this.sessionHasStarted = sessionHasStarted;
    }
    generateEnemies() {
        //generates at most up to 3 enemies per session
        let max = 4;
        let randomNumberEnemies = Math.floor(Math.random() * max);
        let sessionEnemies = [];
        let EnemyTypes = Object.keys(dictionary_enemies_1.default);
        let randomIndex = Math.floor(Math.random() * EnemyTypes.length);
        //if number of random enemies generated is zero regenerate until bigger than zero
        if (randomNumberEnemies === 0) {
            while (true) {
                randomNumberEnemies = Math.floor(Math.random() * max);
                if (randomNumberEnemies > 0) {
                    break;
                }
            }
        }
        //adds random number of enemies to the sessionEnemies list 
        while (sessionEnemies.length <= randomNumberEnemies) {
            for (let i = 0; i < EnemyTypes.length; i++) {
                let type = EnemyTypes[randomIndex];
                if (type === 'GOBLIN') {
                    sessionEnemies.push(new Goblin_1.default(dictionary_enemies_1.default.GOBLIN.atkSets, dictionary_enemies_1.default.GOBLIN.name, dictionary_enemies_1.default.GOBLIN.hp, dictionary_enemies_1.default.GOBLIN.characterClass, dictionary_enemies_1.default.GOBLIN.atkPow));
                }
                else if (type === 'ORC') {
                    sessionEnemies.push(new Orc_1.default(dictionary_enemies_1.default.ORC.atkSets, dictionary_enemies_1.default.ORC.name, dictionary_enemies_1.default.ORC.hp, dictionary_enemies_1.default.ORC.characterClass, dictionary_enemies_1.default.ORC.atkPow));
                }
            }
        }
        return sessionEnemies;
    }
    setStartTheSession(state) {
        this.sessionHasStarted = state;
    }
    setEndTheSession(state) {
        this.sessionHasEnded = state;
    }
    EndTheSession() {
        this.setEndTheSession(true);
        this.setStartTheSession(false);
        console.log('Round over');
    }
    startTheSession() {
        this.setStartTheSession(true);
        this.setEndTheSession(false);
        console.log('Begin!');
    }
}
exports.default = Session;
//# sourceMappingURL=Session.js.map