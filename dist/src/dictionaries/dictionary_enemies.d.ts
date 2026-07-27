import { attack } from "../types/types_attacks";
declare let enemies: {
    GOBLIN: {
        name: string;
        hp: number;
        characterClass: string;
        characterType: string;
        isHero: boolean;
        atkSets: {
            regular: attack[];
            special: attack[];
        };
        atkPow: number;
    };
    ORC: {
        name: string;
        hp: number;
        characterClass: string;
        characterType: string;
        isHero: boolean;
        atkSets: {
            regular: attack[];
            special: attack[];
        };
        atkPow: number;
    };
};
export default enemies;
//# sourceMappingURL=dictionary_enemies.d.ts.map