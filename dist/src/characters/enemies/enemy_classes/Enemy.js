"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Character_1 = __importDefault(require("../../Character"));
class Enemy extends Character_1.default {
    constructor(characterName, hp, atkPow, characterType, EnemyInterface, characterClass) {
        super(characterName, hp, atkPow);
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
            if (this.EnemyInterface.isHeroType === true) {
                return "Yes";
            }
            else {
                return "No";
            }
        }
        else {
            return "Enemy is undefined";
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
    recvDMG(DMG, H) {
        //display info about received damage from enemy
        console.log(`${this.getCharacterName()} received ${DMG} damage from ${H.getCharacterName()}`);
        let newHP = this.getCurrentHP() - DMG;
        this.setEnemyHP(newHP);
    }
    attackHero(H, atk) {
        /*attack function of hero*/
        try {
            if (H) {
                {
                    `${this.getCharacterName()} attacked ${H.getCharacterName()} with ${atk.attackName}`;
                }
            }
            else {
                throw new Error('The hero does not not exist');
            }
        }
        catch (err) {
            if (err instanceof Error) {
                console.log(err.message);
            }
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