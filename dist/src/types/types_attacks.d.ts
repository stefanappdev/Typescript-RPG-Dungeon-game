declare enum attackTypes {
    REGULAR = "REGULAR",
    SPECIAL = "SPECIAL"
}
type attack = {
    attackName: string;
    attackType: attackTypes.REGULAR | attackTypes.SPECIAL;
    description: string;
    damage: number;
};
export { attack, attackTypes };
//# sourceMappingURL=types_attacks.d.ts.map