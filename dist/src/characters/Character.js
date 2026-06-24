"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Character {
    constructor(name, isAlive, hp, atkpow) {
        this.name = name;
        this.hp = hp;
        this.isAlive = isAlive;
        this.atkpow = atkpow;
    }
    //set atkpow of any character
    setAtkpow(atkpow) {
        this.atkpow = atkpow;
    }
    //get atkpow of any character
    getAtkpow() {
        return this.atkpow;
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
        this.name = newName;
    }
    //get name of a character
    getCharacterName() {
        return this.name;
    }
    //registers damage received by a character
    takesDamage(dmgRecvd) {
        console.log(`${this.getCharacterName} received ${dmgRecvd} damage`);
        let remainingHP = this.getCurrentHP() - dmgRecvd;
        this.setHP(remainingHP);
    }
    attacks(attackUsed, enemyNPC) {
        console.log(`${this.getCharacterName} used ${attackUsed}`);
        console.log(`${enemyNPC.getCharacterName} received ${attackUsed.damage}`);
    }
    //set the living status of a character
    setIsAlive(newAliveStatus) {
        this.isAlive = newAliveStatus;
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
}
exports.default = Character;
//# sourceMappingURL=Character.js.map