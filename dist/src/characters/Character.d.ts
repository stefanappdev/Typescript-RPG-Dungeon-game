import { attack } from "../types/types_attacks";
declare class Character {
    hp: number;
    characterName: string;
    private atkPow;
    characterClass: string;
    constructor(characterName: string, hp: number, characterClass: string, atkPow: number);
    setAtkpow(atkPow: number): void;
    getAtkpow(): number;
    setHP(hp: number): void;
    getCurrentHP(): number;
    setCharacterName(newName: string): void;
    getCharacterName(): string;
    setCharacterClass(newClass: string): void;
    getCharacterClass(): string;
    IsAlive(): boolean;
    IsDead(): boolean;
    takesDmg(dmgRcvd: number): void;
    attack(atk: attack, opponent: Character): void;
}
export default Character;
//# sourceMappingURL=Character.d.ts.map