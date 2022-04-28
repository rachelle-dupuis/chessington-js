import Piece from './piece';
import Square from "../square";

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const {row, col} = board.findPiece(this);
        return [
            Square.at(row + 2, col + 1),
            Square.at(row + 2, col - 1),
            Square.at(row -2, col + 1),
            Square.at(row - 2, col - 1),
            Square.at(row + 1, col + 2),
            Square.at(row + 1, col - 2),
            Square.at(row - 1, col + 2),
            Square.at(row - 1, col - 2)
            ]
    }
}
