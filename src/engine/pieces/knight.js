import Piece from './piece';
import Square from "../square";

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const {row, col} = board.findPiece(this);
        let availableMoves = [];
        const knightMoves = [
            Square.at(row + 2, col + 1),
            Square.at(row + 2, col - 1),
            Square.at(row -2, col + 1),
            Square.at(row - 2, col - 1),
            Square.at(row + 1, col + 2),
            Square.at(row + 1, col - 2),
            Square.at(row - 1, col + 2),
            Square.at(row - 1, col - 2)
        ];
        for (const move of knightMoves) {
            if (move.row >= 0 && move.row <= 7 && move.col >= 0 && move.col <= 7) {
                availableMoves.push(move);
            }
        }
        return availableMoves;
    }
}
