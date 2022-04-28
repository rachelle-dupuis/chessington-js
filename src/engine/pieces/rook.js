import Piece from './piece';
import Square from "../square";

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
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
        console.log(availableMoves);
        return availableMoves;
    }
}
