import attackHandler from "../BattleManager/InputManager/InputManagerAttacks";
import Hero from "../characters/Heroes/hero_classes/Hero";
import { attack } from "../types/types_attacks";
import dictionary_heroes from "../dictionaries/dictionary_heroes";


let Mike=new Hero("Mike",dictionary_heroes.WARRIOR.hp,dictionary_heroes.WARRIOR.hp,dictionary_heroes.WARRIOR.atkPow);

Mike.setHeroInterface(
    dictionary_heroes.WARRIOR.characterClass,
    dictionary_heroes.WARRIOR.isHero,
    dictionary_heroes.WARRIOR.atkSets
)

const execute=async():Promise<void>=>{
let atk:attack|undefined=await attackHandler(Mike);
console.log(atk)

}

execute()