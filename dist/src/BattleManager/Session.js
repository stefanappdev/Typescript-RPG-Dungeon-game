"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Goblin_1 = __importDefault(require("../characters/enemies/enemy_classes/Goblin"));
const Orc_1 = __importDefault(require("../characters/enemies/enemy_classes/Orc"));
const Archer_1 = __importDefault(require("../characters/Heroes/hero_classes/Archer"));
const Mage_1 = __importDefault(require("../characters/Heroes/hero_classes/Mage"));
const Warrior_1 = __importDefault(require("../characters/Heroes/hero_classes/Warrior"));
const types_attacks_1 = require("../types/types_attacks");
class Session {
    constructor(achievedSessionVictory, enemies, numEnemies, player, nextSession, sessionInProgress) {
        this.player = player;
        this.numEnemies = numEnemies;
        this.nextSession = nextSession;
        this.sessionInProgress = sessionInProgress;
        this.enemies = enemies;
        this.achievedSessionVictory = achievedSessionVictory;
    }
    //generates enemies for a session 
    GenerateEnemies(enemyType) {
        let sessionEnemy;
        switch (enemyType) {
            case 'goblin':
                sessionEnemy = new Goblin_1.default('goblin', true, 50, 5, 'Enemy', [{ attackName: 'goblin punch',
                        attackType: types_attacks_1.attackTypes.REGULAR,
                        description: 'light punch',
                        damage: 5 }
                ], [
                    { attackName: 'goblin super punch',
                        attackType: types_attacks_1.attackTypes.SPECIAL,
                        description: 'super punch',
                        damage: 10 }
                ]);
                break;
            case 'orc':
                sessionEnemy = new Orc_1.default('Orc', true, 75, 10, 'Enemy', [{ attackName: 'Orc slash',
                        attackType: types_attacks_1.attackTypes.REGULAR,
                        description: 'light attack with sword',
                        damage: 10 }
                ], [
                    { attackName: 'orc power slash',
                        attackType: types_attacks_1.attackTypes.SPECIAL,
                        description: 'light attack with sword',
                        damage: 15 }
                ]);
                break;
            default:
                return;
        }
        return sessionEnemy;
    }
    /*sets the start or stop of a round*/
    setSessionInProgress(state) {
        if (this.sessionInProgress === undefined) {
            this.sessionInProgress = state;
        }
        else {
            this.sessionInProgress = state;
        }
    }
    setAchievedSessionVictory(state) {
        if (this.achievedSessionVictory === undefined) {
            this.achievedSessionVictory = state;
        }
        else {
            this.achievedSessionVictory = state;
        }
    }
    getAchievedSessionVictory() {
        return this.achievedSessionVictory;
    }
    //gets the current state of a round*/
    getSessionInProgress() {
        return this.sessionInProgress;
    }
    //sets number of enemies for a session or round
    setNoSessionEnemies() {
        this.numEnemies = Math.floor(Math.random() * 4);
    }
    //randomly generates enemies in a session
    generateRandomEnemies() {
        let enemies = [{ id: 0, type: 'goblin' }, { id: 1, type: 'orc' }];
        for (let x = 0; x < this.numEnemies; x++) {
            let key = Math.floor(Math.random() * this.numEnemies);
            let target = enemies.find(enemy => enemy.id === key);
            if (target) {
                if (target.type === 'goblin') {
                    this.enemies.push(this.GenerateEnemies('goblin'));
                }
                else if (target.type === 'Orc') {
                    this.enemies.push(this.GenerateEnemies('goblin'));
                }
            }
        }
    }
    // generates a Hero based on player input
    GenerateHero(heroName, heroType) {
        let choosenHeroClass;
        switch (heroType) {
            case "warrior":
                choosenHeroClass = new Warrior_1.default(heroName, true, 100, 15, 'Warrior', [{ attackName: 'sword slash',
                        attackType: types_attacks_1.attackTypes.REGULAR,
                        description: 'light attack with sword',
                        damage: 10 }
                ], [
                    { attackName: 'power strike',
                        attackType: types_attacks_1.attackTypes.SPECIAL,
                        description: 'deals heavy damage with sword',
                        damage: 15 }
                ]);
                break;
            case "archer":
                choosenHeroClass = choosenHeroClass = new Archer_1.default(heroName, true, 100, 15, 'Archer', [{ attackName: 'bow strike',
                        attackType: types_attacks_1.attackTypes.REGULAR,
                        description: 'hit with arrow attack',
                        damage: 10 }
                ], [
                    { attackName: 'critical shot',
                        attackType: types_attacks_1.attackTypes.SPECIAL,
                        description: 'deals heavy ranged damaged with arrows',
                        damage: 15 }
                ]);
                break;
            case "mage":
                choosenHeroClass = choosenHeroClass = new Mage_1.default(heroName, true, 100, 15, 'Mage', [{ attackName: 'fireball',
                        attackType: types_attacks_1.attackTypes.REGULAR,
                        description: 'magic fireball attack',
                        damage: 10 }
                ], [
                    { attackName: 'inferno',
                        attackType: types_attacks_1.attackTypes.SPECIAL,
                        description: 'critical attack Fire apell',
                        damage: 15 }
                ]);
                break;
            default:
                return;
        }
        return choosenHeroClass;
    }
    turnManager(hero, enemies) {
        ///turn Q to manage turns taken
        //add all players to to turnQ
        let turnQ = [];
        turnQ.splice(0, 0, hero, enemies.slice(0));
        //removes first player at start of turnQ
        let currentplayer = turnQ.shift();
        let nextplayer;
        function checkForSessionVictory(turnQ, hero) {
            if (turnQ.length === 1 && hero.IsAlive()) {
                return true;
            }
            else {
                return false;
            }
        }
        while (turnQ.length > 0) {
            if (currentplayer === hero) {
                //actions to be taken if hero's turn
                let regAtks = currentplayer.getRegularAttackMoves();
                let atkdmg = regAtks[0].damage;
                let randomIndex = Math.floor(Math.random() * turnQ.length);
                let target = turnQ[randomIndex];
                currentplayer.attacks(regAtks[0], target);
                target.takesDamage(atkdmg);
                if (hero.IsAlive()) {
                    //adds hero back to turnQ at end of turn and set an enemy to currentplayer
                    //if hero is alive
                    let gotSessionwin = checkForSessionVictory(turnQ, hero);
                    if (gotSessionwin) {
                        this.setAchievedSessionVictory(true);
                        this.setSessionInProgress(false);
                        break;
                    }
                    turnQ.push(currentplayer);
                    nextplayer = turnQ.shift();
                    currentplayer = nextplayer;
                }
            }
            else if (currentplayer !== hero) {
                //finish logic for enemy turn
                //actions to be taken if enemy's turn
                let regAtks = currentplayer.getRegularAttackMoves();
                let atkdmg = regAtks[0].damage;
                let randonIndex = Math.floor(Math.random() * turnQ.length);
                let target = turnQ[randonIndex];
                currentplayer.attacks(regAtks[0], target);
                target.takesDamage(atkdmg);
                //check if hero dies after enemy turn
                if (hero.IsDead()) {
                    this.setAchievedSessionVictory(false);
                    this.setSessionInProgress(false);
                    break;
                }
                //adds enemy back to turnQ at end of turn and set an enemy to currentplayer
                turnQ.push(currentplayer);
                nextplayer = turnQ.shift();
                currentplayer = nextplayer;
            }
        }
    }
}
exports.default = Session;
//# sourceMappingURL=Session.js.map