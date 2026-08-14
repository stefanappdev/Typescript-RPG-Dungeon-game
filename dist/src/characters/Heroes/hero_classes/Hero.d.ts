import EnemyInterface from "../../../interfaces/enemyInterface";
import HeroInterface from "../../../interfaces/heroInterface";
import { attack } from "../../../types/types_attacks";
import Character from "../../Character";
import Enemy from "../../enemies/enemy_classes/Enemy";
declare class Hero<T extends HeroInterface> extends Character {
    protected heroInterface: HeroInterface | undefined;
    isHero: boolean | undefined;
    characterClass: string | undefined;
    constructor(characterName: string, hp: number, currentHP: number, atkPow: number, heroInterface?: T | undefined, isHero?: boolean | undefined, characterClass?: string | undefined);
    setHeroInterface(characterClass: string, isHero: boolean, atkSets: {
        regular: attack[];
        special: attack[];
    }): void;
    isAHero(): boolean | undefined;
    getCharacterClass(): string;
    getRegularAtks(): attack[];
    getSpecialAtks(): attack[];
    recvDMG(DMG: number): void;
    attackEnemy(E: Enemy<EnemyInterface> | undefined, atk: attack): void;
    setHeroCurrentHP(hp: number): void;
}
export default Hero;
//# sourceMappingURL=Hero.d.ts.map