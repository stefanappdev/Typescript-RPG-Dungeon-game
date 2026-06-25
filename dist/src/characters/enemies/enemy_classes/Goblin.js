"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Character_ts_1 = __importDefault(require("../../Character.js"));
class Goblin extends Character_ts_1.default {
    constructor(atkSets, name, hp, characterClass, atkPow) {
        super(name, hp, characterClass, atkPow);
        this.atkSets = atkSets;
    }
    setRegularAttacks(atks) {
        this.atkSets.regular = atks;
    }
    setSpecialAttacks(atks) {
        this.atkSets.special = atks;
    }
    getRegularAttacks() {
        return this.atkSets.regular;
    }
    getSpecialAttacks() {
        return this.atkSets.special;
    }
}
exports.default = Goblin;
//# sourceMappingURL=Goblin.js.map