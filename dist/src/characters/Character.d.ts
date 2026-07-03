import { attack } from "../types/types_attacks";
declare class Character {
    hp: number;
    characterName: string;
    private atkPow;
    characterClass: string;
    characterType: string;
    constructor(characterName: string, hp: number, characterType: string, characterClass: string, atkPow: number);
    setAtkpow(atkPow: number): void;
    getAtkpow(): number;
    setHP(hp: number): void;
    getCurrentHP(): number;
    setCharacterName(newName: string): void;
    getCharacterType(): string;
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