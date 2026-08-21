import Hero from "../characters/Heroes/hero_classes/Hero";
import HeroInterface from "../interfaces/heroInterface";
declare class BattleManager {
    startBattle: boolean;
    endBattle: boolean;
    theHero: Hero<HeroInterface>;
    constructor(startBattle: boolean, endBattle: boolean, theHero: Hero<HeroInterface>);
    setStartOfBattle(state: boolean): void;
    setEndOfBattle(state: boolean): void;
    getEndOfBattle(): boolean;
    getStartOfBattle(): boolean;
    getHero(): Hero<HeroInterface>;
    createNewSession(): Promise<void>;
}
export default BattleManager;
//# sourceMappingURL=BattleManager.d.ts.map