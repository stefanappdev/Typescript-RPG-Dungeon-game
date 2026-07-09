import EnemyInterface from "../../../interfaces/enemyInterface";
import { attack } from "../../../types/types_attacks";
import Character from "../../Character";
declare class Enemy<T extends EnemyInterface> extends Character {
    characterType: string | undefined;
    protected EnemyInterface: EnemyInterface | undefined;
    characterClass: string | undefined;
    constructor(characterName: string, hp: number, atkPow: number, characterType?: string | undefined, EnemyInterface?: EnemyInterface | undefined, characterClass?: string | undefined);
    setEnemyInterface(characterClass: string, characterType: string, isHeroType: boolean, atkSets: {
        regular: attack[];
        special: attack[];
    }): void;
    isAHero(): string;
    getCharacterClass(): string;
    setEnemyHP(hp: number): void;
    getRegularAtks(): attack[];
    getSpecialAtks(): attack[];
}
export default Enemy;
//# sourceMappingURL=Enemy.d.ts.map