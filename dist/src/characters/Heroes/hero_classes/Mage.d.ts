import { attack } from "../../../types/types_attacks.ts";
import HeroInterface from "../../../interfaces/heroInterface.ts";
import Character from "../../Character.ts";
declare class Mage extends Character implements HeroInterface {
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
export default Mage;
//# sourceMappingURL=Mage.d.ts.map