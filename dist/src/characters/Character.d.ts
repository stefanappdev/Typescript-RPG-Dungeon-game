import CharacterInterface from "../interfaces/CharacterInterface";
declare class Character implements CharacterInterface {
    hp: number;
    currentHP: number;
    characterName: string;
    atkPow: number;
    constructor(characterName: string, hp: number, currentHP: number, atkPow: number);
    protected setAtkpow(atkPow: number): void;
    protected getAtkpow(): number;
    protected setCurrentHP(hp: number): void;
    getCurrentHP(): number;
    protected setMaxHP(hp: number): void;
    getMaxHP(): number;
    protected setCharacterName(newName: string): void;
    getCharacterName(): string;
    isAlive(): boolean;
    isDead(): boolean;
}
export default Character;
//# sourceMappingURL=Character.d.ts.map