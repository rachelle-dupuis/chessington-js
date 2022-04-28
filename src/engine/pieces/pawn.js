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
            if (location.row === 1) {
                return new Array(Square.at(location.row + 2, location.col), Square.at(location.row + 1, location.col));
            } else {
                return new Array(Square.at(location.row + 1, location.col));
            }
        } else {
            if (location.row === 6) {
                return new Array(Square.at(location.row - 2, location.col), Square.at(location.row + -1, location.col));
            } else {
                return new Array(Square.at(location.row - 1, location.col));
            }
        }
    }
}
