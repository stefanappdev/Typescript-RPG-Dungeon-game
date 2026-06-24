import { attack } from "../types/types_attacks";
import Enemy from "./enemies/Enemy";
import Hero from "./Heroes/Hero";
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
    takesDamage(dmgRecvd: number): void;
    attacks(attackUsed: attack, enemyNPC: Enemy | Hero): void;
    setIsAlive(newAliveStatus: boolean): void;
    IsAlive(): boolean;
    IsDead(): boolean;
}
export default Character;
//# sourceMappingURL=Character.d.ts.map