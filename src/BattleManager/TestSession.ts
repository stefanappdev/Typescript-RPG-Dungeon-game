
import Session from "./Session";
import Hero from "../characters/Heroes/hero_classes/Hero";
import HeroInterface from "../interfaces/heroInterface";


let testSession:Session=new Session()


async function executeSession(){



await testSession.generateSessionCombatants();

let Enemies=testSession?.getSessionEnemies();
let Player:Hero<HeroInterface>|undefined=testSession.getHeroPlayer()

testSession.initateSessionCombat()

}


executeSession()

//need to implement a ansync function to wait for hero to generate
//currently this throws an error because the hero does not genearate

