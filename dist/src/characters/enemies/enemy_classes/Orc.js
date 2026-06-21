"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Enemy_ts_1 = __importDefault(require("../Enemy.js"));
class Orc extends Enemy_ts_1.default {
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
exports.default = Orc;
//# sourceMappingURL=Orc.js.map