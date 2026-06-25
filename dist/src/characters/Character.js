"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Character {
    constructor(characterName, hp, characterClass, atkPow) {
        this.characterName = characterName;
        this.characterClass = characterClass;
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
    //set class of character 
    setCharacterClass(newClass) {
        this.characterClass = newClass;
    }
    //get cllass of character
    getCharacterClass() {
        return this.characterClass;
    }
    //checks if character is alive
    IsAlive() {
        if (this.getCurrentHP() > 0) {
            return true;
        }
        return false;
    }
    //checks if character is dead
    IsDead() {
        if (this.getCurrentHP() === 0) {
            return true;
        }
        return false;
    }
    takesDmg(dmgRcvd) {
        let remainingHP = this.getCurrentHP() - dmgRcvd;
        console.log(`Received ${dmgRcvd} damage`);
        this.setHP(remainingHP);
    }
    attack(atk, opponent) {
        console.log(`${this.getCharacterName()} used ${atk.attackName} on ${opponent.getCharacterName()}`);
    }
}
exports.default = Character;
//# sourceMappingURL=Character.js.map