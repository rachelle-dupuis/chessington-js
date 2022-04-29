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
            if (board.getPiece(Square.at(row + 1, col)) === undefined) {
                availableMoves.push(Square.at(row + 1, col))
            }
            if (row === 1) {
                if (board.getPiece(Square.at(row + 1, col)) === undefined && board.getPiece(Square.at(row + 2, col)) === undefined) {
                    availableMoves.push(Square.at(row + 2, col));
                }
            }
        } else {
            if (board.getPiece(Square.at(row - 1, col)) === undefined)
            availableMoves.push(Square.at(row - 1, col))
            if (row === 6) {
                if (board.getPiece(Square.at(row - 1, col)) === undefined && board.getPiece(Square.at(row - 2, col)) === undefined) {
                    availableMoves.push(Square.at(row - 2, col));
                }
            }
        }
        return availableMoves;
    }
}
