import Hero from "../Hero.ts";
import { attack } from "../../../types/types_attacks.ts";
import attackSetInterface from "../../../interfaces/attackSetInterface.ts";
declare class Warrior extends Hero implements attackSetInterface {
    private regularAttackMoves;
    private specialAttackMoves;
    constructor(name: string, isAlive: boolean, hp: number, atkpow: number, className: string, regularAttackMoves: attack[], specialAttackMoves: attack[]);
    setRegularAttackMoves(regAttacks: attack[]): void;
    setSpecialAttackMoves(specialAttacks: attack[]): void;
    getRegularAttackMoves(): attack[];
    getSpecialAttackMoves(): attack[];
}
export default Warrior;
//# sourceMappingURL=Warrior.d.ts.map