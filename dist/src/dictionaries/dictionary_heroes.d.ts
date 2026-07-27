import { attack } from "../types/types_attacks";
declare let heroes: {
    MAGE: {
        characterClass: string;
        isHero: boolean;
        atkSets: {
            regular: attack[];
            special: attack[];
        };
        hp: number;
        atkPow: number;
    };
    WARRIOR: {
        characterClass: string;
        isHero: boolean;
        atkSets: {
            regular: attack[];
            special: attack[];
        };
        hp: number;
        atkPow: number;
    };
    ARCHER: {
        characterClass: string;
        isHero: boolean;
        characterType: string;
        atkSets: {
            regular: attack[];
            special: attack[];
        };
        hp: number;
        atkPow: number;
    };
};
export default heroes;
//# sourceMappingURL=dictionary_heroes.d.ts.map