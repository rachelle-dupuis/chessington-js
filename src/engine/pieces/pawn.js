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
        let whiteDiagonalMoves = [Square.at(row + 1, col + 1), Square.at(row + 1, col - 1)];
        let blackDiagonalMoves = [Square.at(row - 1, col + 1), Square.at(row - 1, col - 1)];
        function squareAt(row, col) {
            return board.getPiece(Square.at(row, col));
        }
        if (this.player === Player.WHITE && row < 7) {
            if (squareAt(row + 1, col) === undefined) {
                availableMoves.push(Square.at(row + 1, col))
                if (row === 1 && squareAt(row + 2, col) === undefined) {
                    availableMoves.push(Square.at(row + 2, col));
                }
            }
            for (const move of whiteDiagonalMoves) {
                if (squareAt(move.row, move.col) !== undefined && squareAt(move.row, move.col).player !== this.player) {
                    availableMoves.push(move);
                }
            }
        } else if (this.player === Player.BLACK && row > 0) {
            if (squareAt(row - 1, col) === undefined) {
                availableMoves.push(Square.at(row - 1, col))
                if (row === 6 && squareAt(row - 2, col) === undefined) {
                    availableMoves.push(Square.at(row - 2, col));
                }
            }
            for (const move of blackDiagonalMoves) {
                if (squareAt(move.row, move.col) !== undefined && squareAt(move.row, move.col).player !== this.player) {
                    availableMoves.push(move);
                }
            }
        }
        return availableMoves;
    }
}
