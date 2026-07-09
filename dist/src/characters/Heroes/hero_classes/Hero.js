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
            if (this.heroInterface.isHero === true) {
                return "Yes";
            }
            else {
                return "No";
            }
        }
        else {
            return "hero is undefined";
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
    setHeroHP(hp) {
        super.setHP(hp);
    }
}
exports.default = Hero;
//# sourceMappingURL=Hero.js.map