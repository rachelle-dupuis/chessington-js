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
        let rookRow = row;
        let rookCol = col;
        let availableMoves = [];
        let pieceBlocked = false;
        function resetValues() {
            rookRow = row;
            rookCol = col;
            pieceBlocked = false;
        }
        function addUnoccupiedSquareToAvailableMoves(row, col) {
            if (board.getPiece(Square.at(row, col)) === undefined) {
                availableMoves.push(Square.at(row, col));
            } else {
                pieceBlocked = true;
            }
        }
        while (rookRow < 7 && !pieceBlocked) {
            rookRow++
            addUnoccupiedSquareToAvailableMoves(rookRow, rookCol);
        }
        resetValues();
        while (rookRow > 0 && !pieceBlocked) {
            rookRow--
            addUnoccupiedSquareToAvailableMoves(rookRow, rookCol);
        }
        resetValues();
        while (rookCol > 0 && !pieceBlocked) {
            rookCol--
            addUnoccupiedSquareToAvailableMoves(rookRow, rookCol);
        }
        resetValues();
        while (rookCol < 7 && !pieceBlocked) {
            rookCol++
            addUnoccupiedSquareToAvailableMoves(rookRow, rookCol);
        }
        return availableMoves;
    }

    getAvailableMoves(board) {
        return new Array(0);
    }
}
