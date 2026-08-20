import HeroInterface from "../../interfaces/heroInterface";
import Hero from "../../characters/Heroes/hero_classes/Hero";
import initializeHero from "../InputManager/InputManagerHero";




/*complete this hero generator*/

async function generatorHero():Promise<Hero<HeroInterface>>{

    return initializeHero() 

}







module.exports=generatorHero