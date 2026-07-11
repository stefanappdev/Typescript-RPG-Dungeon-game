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
    setSessionEnemies(enemies) {
        /*set the enemies for a session */
        this.sessionEnemies = enemies;
    }
    setWonTheSession(sessionState) {
        /*this is set if a player wins the session */
        this.wonTheSession = sessionState;
    }
    setLostTheSession(sessionState) {
        /*this is set if a player loses the session */
        this.lostTheSession = sessionState;
    }
    setNextSession(nxtSession) {
        /*Sets the next session of applicable */
        this.nextSession = nxtSession;
    }
    setHeroPlayer(H) {
        /**set the hero to be used for a session */
        this.heroPlayer = H;
    }
    getHeroPlayer() {
        try {
            if (this.heroPlayer) {
                return this.heroPlayer;
            }
            else {
                throw new Error("This hero does not exist");
            }
        }
        catch (err) {
            if (err instanceof Error) {
                console.log(err.message);
            }
        }
    }
    getSessionEnemies() {
        try {
            if (this.sessionEnemies) {
                return this.sessionEnemies;
            }
            else {
                throw new Error('Hmm...not finding any enemies for this session');
            }
        }
        catch (err) {
            if (err instanceof Error) {
                console.log(err.message);
            }
        }
    }
    generateEnemies() {
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
        ///generates a fixed number of enemies randomly 
        const genRandNum = () => {
            let maxEnemies = 5;
            let randnum = Math.floor(Math.random() * maxEnemies);
            while (randnum < 1) {
                genRandNum();
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
        this.setSessionEnemies(sessionEnemies);
        console.log("enemies generated for this session:");
        if (this.sessionEnemies) {
            this.sessionEnemies.forEach(enemy => {
                console.log(enemy.getCharacterName());
            });
        }
    }
}
exports.default = Session;
//# sourceMappingURL=Session.js.map