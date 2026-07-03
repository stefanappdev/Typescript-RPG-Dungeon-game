"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dictionary_enemies_1 = __importDefault(require("../dictionaries/dictionary_enemies"));
const Goblin_1 = __importDefault(require("../characters/enemies/enemy_classes/Goblin"));
const Orc_1 = __importDefault(require("../characters/enemies/enemy_classes/Orc"));
class Session {
    constructor(heroPlayer, sessionHasStarted, sessionHasEnded, wonTheSession, lostTheSession, nextSession) {
        this.lostTheSession = lostTheSession;
        this.sessionHasEnded = sessionHasEnded;
        this.wonTheSession = wonTheSession;
        this.heroPlayer = heroPlayer;
        this.sessionHasStarted = sessionHasStarted;
        this.nextSession = nextSession;
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
                    sessionEnemies.push(new Goblin_1.default(dictionary_enemies_1.default.GOBLIN.atkSets, dictionary_enemies_1.default.GOBLIN.name, dictionary_enemies_1.default.GOBLIN.hp, dictionary_enemies_1.default.GOBLIN.characterClass, dictionary_enemies_1.default.GOBLIN.characterType, dictionary_enemies_1.default.GOBLIN.atkPow));
                }
                else if (type === 'ORC') {
                    sessionEnemies.push(new Orc_1.default(dictionary_enemies_1.default.ORC.atkSets, dictionary_enemies_1.default.ORC.name, dictionary_enemies_1.default.ORC.hp, dictionary_enemies_1.default.ORC.characterClass, dictionary_enemies_1.default.ORC.characterType, dictionary_enemies_1.default.ORC.atkPow));
                }
            }
        }
        console.log('Enemies are being generated...');
        return sessionEnemies;
    }
    initateSessionCombat(hero, enemies) {
        let TurnQ = [];
        TurnQ.splice(0, 0, hero, enemies);
        let foes = TurnQ[1];
        ///console.log(TurnQ)
        ///console.log(TurnQ[1])
        /*
        character at front of turnQ goes first attacks an enemy.
        if the character is alive after their turn remove from front of turnQ and
        place at back. Repeat until either all enemies die or the hero dies.
        If hero dies => session is lost,
        if the hero slays all enemies=> session is won and should proceed to the next session.
        */
        let currentPlayer = TurnQ.shift();
        if (currentPlayer === hero) {
            //hero attacks sets
            let heroSpecialAttacks = hero.getSpecialAttacks();
            let heroRegularAttacks = hero.getRegularAttacks();
            //pick random atk regular or special from attack set for hero to use
            let heroAtks = heroRegularAttacks.concat(heroSpecialAttacks);
            let randAtk = heroAtks[Math.floor(Math.random() * heroAtks.length + 1)];
            //random chooses an enemy for the hero to attack
            let randEnemyIndex = Math.floor(Math.random() * (foes.length + 1));
            if (randEnemyIndex === 0) {
                while (true) {
                    randEnemyIndex = Math.floor(Math.random() * (foes.length + 1));
                    if (randEnemyIndex > 0) {
                        break;
                    }
                }
            }
            // console.log(randEnemyIndex)
            let foe = foes[randEnemyIndex];
            //displays damage taken by attack used by hero and dmg take zenemy 
            hero.attack(randAtk, foe);
            foe.takesDamage(randAtk?.damage);
            //removes dead enemy from array
            if (foe.isDead()) {
                let pos = TurnQ[1].indexOf(foe);
                TurnQ[1].splice(pos, 1);
            }
            //pushes hero back into array
            TurnQ.push(currentPlayer);
            currentPlayer = TurnQ.shift();
        }
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