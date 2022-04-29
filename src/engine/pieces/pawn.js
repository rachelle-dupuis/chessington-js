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
        function square(row, col) {
            return board.getPiece(Square.at(row, col));
        }
        if (this.player === Player.WHITE) {
            if (square(row + 1, col) === undefined) {
                availableMoves.push(Square.at(row + 1, col))
            }
            if (row === 1) {
                if (square(row + 1, col) === undefined && square(row + 2, col) === undefined) {
                    availableMoves.push(Square.at(row + 2, col));
                }
            }
        } else {
            if (square(row - 1, col) === undefined)
            availableMoves.push(Square.at(row - 1, col))
            if (row === 6) {
                if (square(row - 1, col) === undefined && square(row - 2, col) === undefined) {
                    availableMoves.push(Square.at(row - 2, col));
                }
            }
        }
        return availableMoves;
    }
}
