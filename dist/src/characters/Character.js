"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Character {
    constructor(characterName, hp, currentHP, atkPow) {
        this.characterName = characterName;
        this.hp = hp;
        this.currentHP = currentHP;
        this.atkPow = atkPow;
    }
    //set atkpow of any character
    setAtkpow(atkPow) {
        this.atkPow = atkPow;
    }
    //get atkpow of any character
    getAtkpow() {
        return this.atkPow;
    }
    //set current HP of any character
    setCurrentHP(hp) {
        if (hp < 0) {
            hp = 0;
        }
        return this.currentHP = hp;
    }
    //get maxHP of any character
    getCurrentHP() {
        return this.currentHP;
    }
    //set max HP of any character
    setMaxHP(hp) {
        this.hp = hp;
    }
    //get maxHP of any character
    getMaxHP() {
        return this.hp;
    }
    // set name of a character
    setCharacterName(newName) {
        this.characterName = newName;
    }
    //get name of a character
    getCharacterName() {
        return this.characterName;
    }
    //checks if character is alive
    isAlive() {
        if (this.getCurrentHP() > 0) {
            return true;
        }
        return false;
    }
}
exports.default = Character;
//# sourceMappingURL=Character.js.map