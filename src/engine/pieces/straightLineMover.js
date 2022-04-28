import Piece from './piece';
import Square from "../square";

export default class StraightLineMover extends Piece {
    constructor(player) {
        super(player);
    }

    getDiagonalMoves(board) {
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

    getLateralMoves(board) {
        const {row, col} = board.findPiece(this);
        let availableMoves = [];
        for (let i = 0; i <= 7; i++) {
            if (i !== col) {
                availableMoves.push(Square.at(row, i));
            }
            if (i !== row) {
                availableMoves.push(Square.at(i, col));
            }
        }
        return availableMoves;
    }

    getAvailableMoves(board) {
        return new Array(0);
    }
}
