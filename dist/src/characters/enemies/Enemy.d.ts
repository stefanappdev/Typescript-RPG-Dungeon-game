import Character from "../Character.ts";
declare class Enemy extends Character {
    protected className: string;
    constructor(name: string, isAlive: boolean, hp: number, atkpow: number, className: string);
    setClassName(className: string): void;
    getClassName(): string;
}
export default Enemy;
//# sourceMappingURL=Enemy.d.ts.map