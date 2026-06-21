import Enemy from "../characters/enemies/Enemy"
import Hero from "../characters/Heroes/Hero";


interface sessionInterface{
      GenerateEnemies(enemyType:string):Enemy;
      GenerateHero(heroName:string,heroType:string):Hero|any;
}

export default sessionInterface;