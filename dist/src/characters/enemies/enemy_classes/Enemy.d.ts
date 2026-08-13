import EnemyInterface from "../../../interfaces/enemyInterface";
import HeroInterface from "../../../interfaces/heroInterface";
import { attack } from "../../../types/types_attacks";
import Character from "../../Character";
import Hero from "../../Heroes/hero_classes/Hero";
declare class Enemy<T extends EnemyInterface> extends Character {
    characterType: string | undefined;
    protected EnemyInterface: EnemyInterface | undefined;
    characterClass: string | undefined;
    constructor(characterName: string, hp: number, atkPow: number, characterType?: string | undefined, EnemyInterface?: EnemyInterface | undefined, characterClass?: string | undefined);
    setEnemyInterface(characterClass: string, characterType: string, isHeroType: boolean, atkSets: {
        regular: attack[];
        special: attack[];
    }): void;
    isAHero(): boolean | undefined;
    getCharacterClass(): string;
    getCharacterType(): string;
    setEnemyHP(hp: number): void;
    getRegularAtks(): attack[];
    chooseRandomRegAttack: () => attack | undefined;
    chooseRandomSpecialAttack: () => attack | undefined;
    chooseRandomAtk(): attack | undefined;
    recvDMG(DMG: number, H: Hero<HeroInterface>): void;
    attackHero(H: Hero<HeroInterface>, atk: attack): void;
    getSpecialAtks(): attack[];
}
export default Enemy;
//# sourceMappingURL=Enemy.d.ts.map