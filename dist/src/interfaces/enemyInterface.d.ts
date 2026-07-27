import { attack } from "../types/types_attacks";
interface EnemyInterface {
    characterClass: string;
    characterType: string;
    isHeroType: boolean;
    atkSets: {
        regular: attack[];
        special: attack[];
    };
}
export default EnemyInterface;
//# sourceMappingURL=enemyInterface.d.ts.map