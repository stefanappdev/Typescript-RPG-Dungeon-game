import Enemy from "../Enemy.ts";
import { attack } from "../../../types/types_attacks.ts";
import attackSetInterface from "../../../interfaces/attackSetInterface.ts";
declare class Orc extends Enemy implements attackSetInterface {
    private regularAttackMoves;
    private specialAttackMoves;
    constructor(name: string, isAlive: boolean, hp: number, atkpow: number, className: string, regularAttackMoves: attack[], specialAttackMoves: attack[]);
    setRegularAttackMoves(regAttacks: attack[]): void;
    setSpecialAttackMoves(specialAttacks: attack[]): void;
    getRegularAttackMoves(): attack[];
    getSpecialAttackMoves(): attack[];
}
export default Orc;
//# sourceMappingURL=Orc.d.ts.map