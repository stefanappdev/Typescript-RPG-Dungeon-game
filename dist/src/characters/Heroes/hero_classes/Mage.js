"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Hero_ts_1 = __importDefault(require("../Hero.js"));
class Mage extends Hero_ts_1.default {
    constructor(name, isAlive, hp, atkpow, className, regularAttackMoves, specialAttackMoves) {
        super(name, isAlive, hp, atkpow, className);
        this.regularAttackMoves = regularAttackMoves;
        this.specialAttackMoves = specialAttackMoves;
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
exports.default = Mage;
//# sourceMappingURL=Mage.js.map