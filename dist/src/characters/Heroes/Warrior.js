"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Character_ts_1 = __importDefault(require("../Character.js"));
class Warrior extends Character_ts_1.default {
    constructor(name, isAlive, hp, atkpow, regularAttackMoves, specialAttackMoves) {
        super(name, isAlive, hp, atkpow);
        this.specialAttackMoves = specialAttackMoves;
        this.regularAttackMoves = regularAttackMoves;
    }
    setRegularAttackMoves(regAttacks) {
        this.regularAttackMoves = regAttacks;
    }
    setSpecialAttackMoves(specialAttacks) {
        this.specialAttackMoves = specialAttacks;
    }
    ;
    getRegularAttackMoves() {
        return this.regularAttackMoves;
    }
    getSpecialAttackMoves() {
        return this.specialAttackMoves;
    }
}
exports.default = Warrior;
//# sourceMappingURL=Warrior.js.map