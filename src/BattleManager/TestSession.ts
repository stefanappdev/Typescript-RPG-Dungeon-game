
import Session from "./Session";
import Hero from "../characters/Heroes/hero_classes/Hero";
import HeroInterface from "../interfaces/heroInterface";
import generatorHero from "./generators/generatorHero";
import Enemy from "../characters/enemies/enemy_classes/Enemy";
import EnemyInterface from "../interfaces/enemyInterface";
import generatorEnemies from "./generators/generatorEnemies";




async function executeSession(){

let HERO:Hero<HeroInterface>=await generatorHero()
let ENEMIES:Enemy<EnemyInterface>[]=await generatorEnemies()

let testSession:Session=new Session(HERO,ENEMIES)


testSession.initateSessionCombat()

}


executeSession()

//need to implement a ansync function to wait for hero to generate
//currently this throws an error because the hero does not genearate

