"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Character {
    constructor(characterName, hp, atkPow) {
        this.characterName = characterName;
        this.hp = hp;
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
    //set HP of any character
    setHP(hp) {
        this.hp = hp;
    }
    //get current HP of any character
    getCurrentHP() {
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
    //checks if character is dead
    isDead() {
        if (this.getCurrentHP() === 0) {
            return true;
        }
        return false;
    }
}
exports.default = Character;
//# sourceMappingURL=Character.js.map