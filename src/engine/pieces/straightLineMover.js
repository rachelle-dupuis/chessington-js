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
        let pieceBlocked = false;
        function resetValues() {
            bishopRow = row;
            bishopCol = col;
            pieceBlocked = false;
        }
        function addUnoccupiedSquareToAvailableMoves(row, col) {
            if (board.getPiece(Square.at(row, col)) === undefined) {
                availableMoves.push(Square.at(row, col));
            } else {
                pieceBlocked = true;
            }
        }
        while (bishopRow < 7 && bishopCol < 7 && !pieceBlocked) {
            bishopRow++;
            bishopCol++;
            addUnoccupiedSquareToAvailableMoves(bishopRow, bishopCol);
        }
        resetValues();
        while (bishopRow < 7 && bishopCol > 0 && !pieceBlocked) {
            bishopRow++;
            bishopCol--;
            addUnoccupiedSquareToAvailableMoves(bishopRow, bishopCol);
        }
        resetValues();
        while (bishopRow > 0 && bishopCol > 0 && !pieceBlocked) {
            bishopRow--;
            bishopCol--;
            addUnoccupiedSquareToAvailableMoves(bishopRow, bishopCol);
        }
        resetValues();
        while (bishopRow > 0 && bishopCol < 7 && !pieceBlocked) {
            bishopRow--;
            bishopCol++;
            addUnoccupiedSquareToAvailableMoves(bishopRow, bishopCol);
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
        function addUnoccupiedSquareToAvailableMoves(row, col, player) {
            if (board.getPiece(Square.at(row, col)) === undefined) {
                availableMoves.push(Square.at(row, col));
            } else if (board.getPiece(Square.at(row, col)).player !== player) {
                availableMoves.push(Square.at(row, col));
                pieceBlocked = true;
            }
            else {
                pieceBlocked = true;
            }
        }
        while (rookRow < 7 && !pieceBlocked) {
            rookRow++
            addUnoccupiedSquareToAvailableMoves(rookRow, rookCol, this.player);
        }
        resetValues();
        while (rookRow > 0 && !pieceBlocked) {
            rookRow--
            addUnoccupiedSquareToAvailableMoves(rookRow, rookCol, this.player);
        }
        resetValues();
        while (rookCol > 0 && !pieceBlocked) {
            rookCol--
            addUnoccupiedSquareToAvailableMoves(rookRow, rookCol, this.player);
        }
        resetValues();
        while (rookCol < 7 && !pieceBlocked) {
            rookCol++
            addUnoccupiedSquareToAvailableMoves(rookRow, rookCol, this.player);
        }
        return availableMoves;
    }

    getAvailableMoves(board) {
        return new Array(0);
    }
}
