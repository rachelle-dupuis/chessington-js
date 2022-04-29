import Piece from './piece';
import Square from "../square";

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const {row, col} = board.findPiece(this);
        let availableMoves = [];
        let kingMoves = [
            Square.at(row + 1, col - 1),
            Square.at(row, col + 1),
            Square.at(row + 1, col + 1),
            Square.at(row + 1, col),
            Square.at(row - 1, col + 1),
            Square.at(row, col - 1),
            Square.at(row - 1, col),
            Square.at(row - 1, col - 1),
        ];
        for (const move of kingMoves) {
            if (move.row >= 0 && move.row <= 7 && move.col >= 0 && move.col <= 7) {
                availableMoves.push(move);
            }
        }
        return availableMoves;
    }
}
