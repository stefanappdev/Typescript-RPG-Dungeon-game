"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Character_1 = __importDefault(require("../../Character"));
class Enemy extends Character_1.default {
    constructor(characterName, hp, atkPow, characterType, EnemyInterface, characterClass) {
        super(characterName, hp, atkPow);
        this.chooseRandomRegAttack = () => {
            let regularAtks = this.getRegularAtks();
            let randindex = Math.floor(Math.random() * regularAtks.length);
            return regularAtks[randindex];
        };
        this.chooseRandomSpecialAttack = () => {
            let specialAtks = this.getSpecialAtks();
            let randindex = Math.floor(Math.random() * specialAtks.length);
            return specialAtks[randindex];
        };
        this.EnemyInterface = EnemyInterface;
        this.characterType = characterType;
        this.characterClass = characterClass;
    }
    setEnemyInterface(characterClass, characterType, isHeroType, atkSets) {
        this.EnemyInterface === undefined ? this.EnemyInterface = {
            characterType,
            characterClass,
            isHeroType,
            atkSets,
        } : undefined;
    }
    isAHero() {
        if (this.EnemyInterface) {
            if (this.EnemyInterface.isHeroType) {
                return true;
            }
            else {
                return false;
            }
        }
    }
    getCharacterClass() {
        if (this.EnemyInterface) {
            return this.EnemyInterface.characterClass;
        }
        else {
            return "Enemy is undefined";
        }
    }
    getCharacterType() {
        if (this.EnemyInterface) {
            return this.EnemyInterface.characterType;
        }
        else {
            return "Enemy is undefined";
        }
    }
    setEnemyHP(hp) {
        super.setHP(hp);
    }
    getRegularAtks() {
        if (this.EnemyInterface) {
            return this.EnemyInterface.atkSets.regular;
        }
        else {
            let empty = [];
            return empty;
        }
    }
    chooseRandomAtk() {
        let randindex = Math.floor(Math.random() * 2);
        if (randindex === 0) {
            return this.chooseRandomRegAttack();
        }
        else {
            return this.chooseRandomSpecialAttack();
        }
    }
    recvDMG(DMG, H) {
        //display info about received damage from enemy
        console.log(`${this.getCharacterName()} received ${DMG} damage from ${H.getCharacterName()}`);
        let newHP = this.getCurrentHP() - DMG;
        this.setEnemyHP(newHP);
    }
    async attackHero(H, atk) {
        /*attack function of hero*/
        try {
            await setTimeout(() => {
                console.log(`${this.getCharacterName()} attacked ${H.getCharacterName()} with ${atk.attackName}`);
            }, 2000);
            await setTimeout(() => {
                console.log(`${H.getCharacterName()} received ${atk.damage} damage`);
            }, 3000);
        }
        catch (err) {
            throw new Error("Failed to execute enemy attack");
        }
    }
    getSpecialAtks() {
        if (this.EnemyInterface) {
            return this.EnemyInterface.atkSets.special;
        }
        else {
            let empty = [];
            return empty;
        }
    }
}
exports.default = Enemy;
//# sourceMappingURL=Enemy.js.map