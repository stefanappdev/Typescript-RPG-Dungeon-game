import HeroInterface from "../../../interfaces/heroInterface";
import { attack } from "../../../types/types_attacks";
import Character from "../../Character";
declare class Hero<T extends HeroInterface> extends Character {
    protected heroInterface: HeroInterface | undefined;
    isHero: boolean | undefined;
    characterClass: string | undefined;
    constructor(characterName: string, hp: number, atkPow: number, heroInterface?: T | undefined, isHero?: boolean | undefined, characterClass?: string | undefined);
    setHeroInterface(characterClass: string, isHero: boolean, atkSets: {
        regular: attack[];
        special: attack[];
    }): void;
    isAHero(): string;
    getCharacterClass(): string;
    getRegularAtks(): attack[];
    getSpecialAtks(): attack[];
    setHeroHP(hp: number): void;
}
export default Hero;
//# sourceMappingURL=Hero.d.ts.map