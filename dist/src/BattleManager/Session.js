"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Hero_1 = __importDefault(require("../characters/Heroes/Hero"));
const Goblin_1 = __importDefault(require("../characters/enemies/enemy_classes/Goblin"));
const Orc_1 = __importDefault(require("../characters/enemies/enemy_classes/Orc"));
const types_attacks_1 = require("../types/types_attacks");
class Session {
    constructor(achievedSessionVictory, enemies, numEnemies, player, nextSession) {
        this.player = player;
        this.numEnemies = numEnemies;
        this.nextSession = nextSession;
        this.enemies = enemies;
        this.achievedSessionVictory = achievedSessionVictory;
    }
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
    setNoSessionEnemies() {
        this.numEnemies = Math.floor(Math.random() * 4);
    }
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
    GenerateHero(heroName, heroType) {
        let choosenHeroClass;
        switch (heroType) {
            case "warrior":
                choosenHeroClass = new Hero_1.default(heroName, true, 100, 15, 'Warrior');
                break;
            case "archer":
                choosenHeroClass = new Hero_1.default(heroName, true, 75, 20, 'Archer');
                break;
            case "mage":
                choosenHeroClass = new Hero_1.default(heroName, true, 60, 25, 'Mage');
                break;
            default:
                return;
        }
        return choosenHeroClass;
    }
}
exports.default = Session;
//# sourceMappingURL=Session.js.map