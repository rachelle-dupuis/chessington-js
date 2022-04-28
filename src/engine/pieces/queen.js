import Piece from './piece';
import StraightLineMover from "./straightLineMover";

export default class Queen extends StraightLineMover {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let lateralMoves = this.getLateralMoves(board);
        let diagonalMoves = this.getDiagonalMoves(board);
        return lateralMoves.concat(diagonalMoves);
    }
}
