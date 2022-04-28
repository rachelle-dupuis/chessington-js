import Piece from './piece';
import Square from "../square";

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const {row, col} = board.findPiece(this);
        let bishopRow = row;
        let bishopCol = col;
        let availableMoves = [];
        while (bishopRow < 7 && bishopCol < 7) {
            bishopRow++;
            bishopCol++;
            availableMoves.push(Square.at(bishopRow, bishopCol));
        }
        bishopRow = row;
        bishopCol = col;
        while (bishopRow < 7 && bishopCol > 0) {
            bishopRow++;
            bishopCol--;
            availableMoves.push(Square.at(bishopRow, bishopCol));
        }
        bishopRow = row;
        bishopCol = col;
        while (bishopRow > 0 && bishopCol > 0) {
            bishopRow--;
            bishopCol--;
            availableMoves.push(Square.at(bishopRow, bishopCol));
        }
        bishopRow = row;
        bishopCol = col;
        while (bishopRow > 0 && bishopCol < 7) {
            bishopRow--;
            bishopCol++;
            availableMoves.push(Square.at(bishopRow, bishopCol));
        }
        return availableMoves;
    }
}
