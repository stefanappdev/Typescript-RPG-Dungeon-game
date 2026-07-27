"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Character_1 = __importDefault(require("../../Character"));
class Hero extends Character_1.default {
    constructor(characterName, hp, atkPow, heroInterface, isHero, characterClass) {
        super(characterName, atkPow, hp);
        this.heroInterface = heroInterface;
        this.isHero = isHero;
        this.characterClass = characterClass;
    }
    setHeroInterface(characterClass, isHero, atkSets) {
        this.heroInterface === undefined ? this.heroInterface = {
            characterClass,
            isHero,
            atkSets,
        } : undefined;
    }
    isAHero() {
        if (this.heroInterface) {
            if (this.heroInterface.isHero) {
                return true;
            }
            else {
                return false;
            }
        }
    }
    getCharacterClass() {
        if (this.heroInterface) {
            return this.heroInterface.characterClass;
        }
        else {
            return "hero is undefined";
        }
    }
    getRegularAtks() {
        if (this.heroInterface) {
            return this.heroInterface.atkSets.regular;
        }
        else {
            let empty = [];
            return empty;
        }
    }
    getSpecialAtks() {
        if (this.heroInterface) {
            return this.heroInterface.atkSets.special;
        }
        else {
            let empty = [];
            return empty;
        }
    }
    recvDMG(DMG, E) {
        //display info about received damage from enemy
        console.log(`${this.getCharacterName()} received ${DMG} damage from ${E.getCharacterName()}`);
        let newHP = this.getCurrentHP() - DMG;
        this.setHeroHP(newHP);
    }
    attackEnemy(E, atk) {
        try {
            if (E) {
                console.log(`${this.getCharacterName()} attacked the ${E.getCharacterName()} with ${atk.attackName}`);
            }
            else {
                throw new Error('The enemy does not not exist');
            }
        }
        catch (Err) {
            if (Err instanceof Error) {
                console.log(Err.message);
            }
        }
    }
    setHeroHP(hp) {
        //set Hp of Hero
        super.setHP(hp);
    }
}
exports.default = Hero;
//# sourceMappingURL=Hero.js.map