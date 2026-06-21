declare class Character {
    hp: number;
    name: string;
    isAlive: boolean;
    private atkpow;
    constructor(name: string, isAlive: boolean, hp: number, atkpow: number);
    setAtkpow(atkpow: number): void;
    getAtkpow(): number;
    setHP(hp: number): void;
    getCurrentHP(): number;
    setCharacterName(newName: string): void;
    getCharacterName(): string;
    setIsAlive(newAliveStatus: boolean): void;
    IsAlive(): boolean;
    IsDead(): boolean;
}
export default Character;
//# sourceMappingURL=Character.d.ts.map