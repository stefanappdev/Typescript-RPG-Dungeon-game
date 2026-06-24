"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Character_ts_1 = __importDefault(require("../Character.js"));
class Hero extends Character_ts_1.default {
    constructor(name, isAlive, hp, atkpow, className) {
        super(name, isAlive, hp, atkpow);
        this.className = className;
    }
    setClassName(className) {
        this.className = className;
    }
    getClassName() {
        return this.className;
    }
}
exports.default = Hero;
//# sourceMappingURL=Hero.js.map