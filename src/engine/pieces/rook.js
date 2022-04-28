import StraightLineMover from "./straightLineMover";

export default class Rook extends StraightLineMover {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        return this.getLateralMoves(board);
    }
}
