"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const InputManagerHero_1 = __importDefault(require("../InputManager/InputManagerHero"));
/*complete this hero generator*/
async function generatorHero() {
    return (0, InputManagerHero_1.default)();
}
module.exports = generatorHero;
//# sourceMappingURL=generatorHero.js.map