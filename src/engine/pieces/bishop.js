import StraightLineMover from "./straightLineMover";

export default class Bishop extends StraightLineMover {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        return this.getDiagonalMoves(board);
    }
}
