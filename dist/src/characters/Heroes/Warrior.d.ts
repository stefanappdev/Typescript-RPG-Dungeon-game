import Character from "../Character.ts";
import { attack } from "../../types/types_attacks.ts";
import attackSetInterface from "../../interfaces/attackSetInterface.ts";
declare class Warrior extends Character implements attackSetInterface {
    private regularAttackMoves;
    private specialAttackMoves;
    constructor(name: string, isAlive: boolean, hp: number, atkpow: number, regularAttackMoves: attack[], specialAttackMoves: attack[]);
    setRegularAttackMoves(regAttacks: attack[]): void;
    setSpecialAttackMoves(specialAttacks: attack[]): void;
    getRegularAttackMoves(): attack[];
    getSpecialAttackMoves(): attack[];
}
export default Warrior;
//# sourceMappingURL=Warrior.d.ts.map