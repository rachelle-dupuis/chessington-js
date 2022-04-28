import Piece from './piece';
import Player from "../player";
import Square from "../square";

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this);
        if (this.player === Player.WHITE) {
            return Square.at(location.row + 1, location.col);
        } else {
            return Square.at(location.row - 1, location.col);
        }
    }
}
