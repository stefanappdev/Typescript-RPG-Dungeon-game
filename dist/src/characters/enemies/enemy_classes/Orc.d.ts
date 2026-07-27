import { attack } from "../../../types/types_attacks.ts";
import Character from "../../Character.ts";
import EnemyInterface from "../../../interfaces/enemyInterface.ts";
declare class Orc extends Character implements EnemyInterface {
    atkSets: {
        regular: attack[];
        special: attack[];
    };
    constructor(atkSets: {
        regular: attack[];
        special: attack[];
    }, name: string, hp: number, characterClass: string, characterType: string, atkPow: number);
    setRegularAttacks(atks: attack[]): void;
    setSpecialAttacks(atks: attack[]): void;
    private getRegularAttacks;
    private getSpecialAttacks;
}
export default Orc;
//# sourceMappingURL=Orc.d.ts.map