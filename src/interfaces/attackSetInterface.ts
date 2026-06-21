import { attack} from "../types/types_attacks";



interface attackSetInterface{
    setRegularAttackMoves:(regAttacks:attack[])=>void;
    setSpecialAttackMoves:(specialAttacks:attack[])=>void;
    getRegularAttackMoves:()=>attack[];
    getSpecialAttackMoves:()=>attack[];
}



export default attackSetInterface;