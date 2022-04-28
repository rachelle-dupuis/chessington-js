import Piece from './piece';
import Player from "../player";
import Square from "../square";

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const {row, col} = board.findPiece(this);
        let availableMoves = [];
        if (this.player === Player.WHITE) {
            availableMoves.push(Square.at(row + 1, col))
            if (row === 1) {
                availableMoves.push(Square.at(row + 2, col));
            }
        } else {
            availableMoves.push(Square.at(row - 1, col))
            if (row === 6) {
                availableMoves.push(Square.at(row - 2, col));
            }
        }
        return availableMoves;
    }
}
