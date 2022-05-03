import Piece from './piece';
import Player from "../player";
import Square from "../square";
import King from "./king";

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
        function getDiagonalMoves(moves, player) {
            for (const move of moves) {
                if (squareAt(move.row, move.col) !== undefined
                    && squareAt(move.row, move.col).player !== player
                    && !(board.getPiece(Square.at(move.row, move.col)) instanceof King)) {
                    availableMoves.push(move);
                }
            }
        }
        if (this.player === Player.WHITE && row < 7) {
            if (squareAt(row + 1, col) === undefined) {
                availableMoves.push(Square.at(row + 1, col))
                if (row === 1 && squareAt(row + 2, col) === undefined) {
                    availableMoves.push(Square.at(row + 2, col));
                }
            }
            getDiagonalMoves(whiteDiagonalMoves, this.player);
        } else if (this.player === Player.BLACK && row > 0) {
            if (squareAt(row - 1, col) === undefined) {
                availableMoves.push(Square.at(row - 1, col))
                if (row === 6 && squareAt(row - 2, col) === undefined) {
                    availableMoves.push(Square.at(row - 2, col));
                }
            }
            getDiagonalMoves(blackDiagonalMoves, this.player);
        }
        return availableMoves;
    }
}
