'use client'
import Nav from "../components/nav"
import { useState } from "react"
import Image from "next/image"

export default function Chess() {

    let emptySpot = {
        image: <div className="w-15 h-15"></div>,
        piece: { team: 'none', unit: 'none' }
    }

    // <div className="w-15 h-15"></div>

    function chessIcon(color, type) {
        let image = <Image 
            src={`/images/chesspieces/${color}${type}.png`}
            alt={`A ${color} ${type}`}
            width={60}
            height={60}
        />
        return image
    }

    let [a1, setA1] = useState({ image: chessIcon('white', 'Rook'), piece: {team: 'white', unit: 'Rook'}})
    let [b1, setB1] = useState({ image: chessIcon('white', 'Knight'), piece: {team: 'white', unit: 'Knight'}})
    let [c1, setC1] = useState({ image: chessIcon('white', 'Bishop'), piece: {team: 'white', unit: 'Bishop'}})
    let [d1, setD1] = useState({ image: chessIcon('white', 'Queen'), piece: {team: 'white', unit: 'Queen'}})
    let [e1, setE1] = useState({ image: chessIcon('white', 'King'), piece: {team: 'white', unit: 'King'}})
    let [f1, setF1] = useState({ image: chessIcon('white', 'Bishop'), piece: {team: 'white', unit: 'Bishop'}})
    let [g1, setG1] = useState({ image: chessIcon('white', 'Knight'), piece: {team: 'white', unit: 'Knight'}})
    let [h1, setH1] = useState({ image: chessIcon('white', 'Rook'), piece: {team: 'white', unit: 'Rook'}})
    let [a2, setA2] = useState({ image: chessIcon('white', 'Pawn'), piece: {team: 'white', unit: 'Pawn'}})
    let [b2, setB2] = useState({ image: chessIcon('white', 'Pawn'), piece: {team: 'white', unit: 'Pawn'}})
    let [c2, setC2] = useState({ image: chessIcon('white', 'Pawn'), piece: {team: 'white', unit: 'Pawn'}})
    let [d2, setD2] = useState({ image: chessIcon('white', 'Pawn'), piece: {team: 'white', unit: 'Pawn'}})
    let [e2, setE2] = useState({ image: chessIcon('white', 'Pawn'), piece: {team: 'white', unit: 'Pawn'}})
    let [f2, setF2] = useState({ image: chessIcon('white', 'Pawn'), piece: {team: 'white', unit: 'Pawn'}})
    let [g2, setG2] = useState({ image: chessIcon('white', 'Pawn'), piece: {team: 'white', unit: 'Pawn'}})
    let [h2, setH2] = useState({ image: chessIcon('white', 'Pawn'), piece: {team: 'white', unit: 'Pawn'}})

    let [a3, setA3] = useState(emptySpot)
    let [b3, setB3] = useState(emptySpot)
    let [c3, setC3] = useState(emptySpot)
    let [d3, setD3] = useState(emptySpot)
    let [e3, setE3] = useState(emptySpot)
    let [f3, setF3] = useState(emptySpot)
    let [g3, setG3] = useState(emptySpot)
    let [h3, setH3] = useState(emptySpot)
    let [a4, setA4] = useState(emptySpot)
    let [b4, setB4] = useState(emptySpot)
    let [c4, setC4] = useState(emptySpot)
    let [d4, setD4] = useState(emptySpot)
    let [e4, setE4] = useState(emptySpot)
    let [f4, setF4] = useState(emptySpot)
    let [g4, setG4] = useState(emptySpot)
    let [h4, setH4] = useState(emptySpot)
    let [a5, setA5] = useState(emptySpot)
    let [b5, setB5] = useState(emptySpot)
    let [c5, setC5] = useState(emptySpot)
    let [d5, setD5] = useState(emptySpot)
    let [e5, setE5] = useState(emptySpot)
    let [f5, setF5] = useState(emptySpot)
    let [g5, setG5] = useState(emptySpot)
    let [h5, setH5] = useState(emptySpot)
    let [a6, setA6] = useState(emptySpot)
    let [b6, setB6] = useState(emptySpot)
    let [c6, setC6] = useState(emptySpot)
    let [d6, setD6] = useState(emptySpot)
    let [e6, setE6] = useState(emptySpot)
    let [f6, setF6] = useState(emptySpot)
    let [g6, setG6] = useState(emptySpot)
    let [h6, setH6] = useState(emptySpot)

    let [a7, setA7] = useState({ image: chessIcon('black', 'Pawn'), piece: {team: 'black', unit: 'Pawn'}})
    let [b7, setB7] = useState({ image: chessIcon('black', 'Pawn'), piece: {team: 'black', unit: 'Pawn'}})
    let [c7, setC7] = useState({ image: chessIcon('black', 'Pawn'), piece: {team: 'black', unit: 'Pawn'}})
    let [d7, setD7] = useState({ image: chessIcon('black', 'Pawn'), piece: {team: 'black', unit: 'Pawn'}})
    let [e7, setE7] = useState({ image: chessIcon('black', 'Pawn'), piece: {team: 'black', unit: 'Pawn'}})
    let [f7, setF7] = useState({ image: chessIcon('black', 'Pawn'), piece: {team: 'black', unit: 'Pawn'}})
    let [g7, setG7] = useState({ image: chessIcon('black', 'Pawn'), piece: {team: 'black', unit: 'Pawn'}})
    let [h7, setH7] = useState({ image: chessIcon('black', 'Pawn'), piece: {team: 'black', unit: 'Pawn'}})
    let [a8, setA8] = useState({ image: chessIcon('black', 'Rook'), piece: {team: 'black', unit: 'Rook'}})
    let [b8, setB8] = useState({ image: chessIcon('black', 'Knight'), piece: {team: 'black', unit: 'Knight'}})
    let [c8, setC8] = useState({ image: chessIcon('black', 'Bishop'), piece: {team: 'black', unit: 'Bishop'}})
    let [d8, setD8] = useState({ image: chessIcon('black', 'Queen'), piece: {team: 'black', unit: 'Queen'}})
    let [e8, setE8] = useState({ image: chessIcon('black', 'King'), piece: {team: 'black', unit: 'King'}})
    let [f8, setF8] = useState({ image: chessIcon('black', 'Bishop'), piece: {team: 'black', unit: 'Bishop'}})
    let [g8, setG8] = useState({ image: chessIcon('black', 'Knight'), piece: {team: 'black', unit: 'Knight'}})
    let [h8, setH8] = useState({ image: chessIcon('black', 'Rook'), piece: {team: 'black', unit: 'Rook'}})

    let [turn, setTurn] = useState('white')
    // starts with white
    let [hasMoved, setHasMoved] = useState(false)
    let [pieceSelected, setPieceSelected] = useState(null)

    function endTurn() {
        if (hasMoved) {
            console.log(`end ${turn}'s turn`)
            if (turn === 'white') {
                setTurn('black')
            }
            if (turn === 'black') {
                setTurn('white')
            }
            setHasMoved(false)
        } else {
            console.log(`You Haven't Moved Yet!`)
        }
        
    }

    function findWherePieceCanMove(unitType, currentSpot) {
        row = currentSpot.charAt(1)
        column = currentSpot.charAt(0)
        let movementSpots = []
        if (unitType === 'Pawn') {
            // y + 1
            // if first move then y + 1 and y + 2
        }
        if (unitType === 'Rook') {
            // all cardinal
                // any +- x and y from currentSpot
        }
        if (unitType === 'Knight') {
            // x +- 2 and y +- 1
            // x +- 1 and y +- 2
        }
        if (unitType === 'Bishop') {
            // all diagonal
                // any +- where x = y
        }
        if (unitType === 'Queen') {
            // all diagonal
                // any +- where x = y
            // all cardinal
                // any +- x and y from current spot

        }
        if (unitType === 'King') {
            // 1 move in any direction
                // x +- 1
                // y +- 1
                // x +- 1 and y +- 1
        }

        function incrementLetter(letter, shift) {
            // Get the character code of the letter and adjust for 'A' being 0.
            let charCode = letter.charCodeAt(0) - 'A'.charCodeAt(0);
        
            // Increment the character code.
            charCode = (charCode + shift + 26) % 26;
        
            // Convert back to a letter.
            return String.fromCharCode(charCode + 'A'.charCodeAt(0));
        }
        
        // Examples
        console.log(incrementLetter('A', 1)); // Should print 'B'
    }

    function spotHighlight(spot, details) {

        // Order of Ops
        // Click on spot
            // Is a piece already selected?
                // Y Is the spot a place the piece can move?
                    // Y Move piece to spot, unselect spot, end turn
                    // N Unselect spot
                // N Does the spot have a piece?
                    // Y Select spot, show where piece can move
                    // N Do nothing
                


        console.log('spot', spot)
        console.log('piece', details)
        console.log('piece', `a ${details.piece.team} ${details.piece.unit}`)

        if (pieceSelected === null) {
            if (details.piece.unit !== 'none') {
                console.log('no piece selected, spot has a piece')
                // select spot
                // show where piece can move
            } else {
                console.log('no piece selected, no piece in spot')
                // do nothing
            }
        } else {
            // calc of where piece can move
            let canMove = true
            if (canMove) {
                console.log('current piece can movie to spot')
                let moveType = 'move'
                if (moveType === 'move') {
                    console.log('move piece to spot')
                    // make current space empty
                    // make new space have details
                } else {
                    console.log('move piece to spot to take another piece')
                    // make current space empty
                    // make new space have details
                    // effectively removing other piece
                }
            } else {
                console.log('selected piece cannot move to spot')
                // unselect piece
            }
        }


        // if (details.piece.team === turn) {
        //     console.log(`this team's turn`)
        //     setPieceSelected(spot)
        // } else {
        //     setPieceSelected(null)
        // }
        
    }

    return (
        <>
            <Nav />
            <div className="flex justify-evenly mt-2 mb-2 text-2xl">
                <h1 className={`${(turn === 'white') ? 'White border-black bg-white' : 'Black bg-black text-white'} border-2 rounded-full p-2`}>{(turn === 'white') ? 'White' : 'Black'}</h1>
                <button onClick={() => endTurn()} className='bg-white border-2 border-black rounded-full p-2 hover:bg-slate-200 transition ease-in-out duration-200'>End Turn</button>
            </div>
            <div className="flex justify-center">
                <div className="flex flex-col border-black border-4">
                    <div className="flex"> {/* row 8 */}
                        <div className={`bg-orange-50 basis-1/8 border-2 ${(pieceSelected === 'a8') ? 'border-black border-collapse ring-inset' : 'border-transparent'}`} onClick={() => spotHighlight('a8', a8)}>
                            <h1 className="absolute">8</h1>
                            <div className="absolute">{a8.image}</div>  
                        </div>
                        <div className={`bg-lime-600 basis-1/8 flex justify-center border-2 ${(pieceSelected === 'b8') ? 'border-black border-collapse ring-inset' : 'border-transparent'}`} onClick={() => spotHighlight('b8', b8)}>{b8.image}</div>
                        <div className={`bg-orange-50 basis-1/8 flex justify-center border-2 ${(pieceSelected === 'c8') ? 'border-black border-collapse ring-inset' : 'border-transparent'}`} onClick={() => spotHighlight('c8', c8)}>{c8.image}</div>
                        <div className={`bg-lime-600 basis-1/8 flex justify-center border-2 ${(pieceSelected === 'd8') ? 'border-black border-collapse ring-inset' : 'border-transparent'}`} onClick={() => spotHighlight('d8', d8)}>{d8.image}</div>
                        <div className={`bg-orange-50 basis-1/8 flex justify-center border-2 ${(pieceSelected === 'e8') ? 'border-black border-collapse ring-inset' : 'border-transparent'}`} onClick={() => spotHighlight('e8', e8)}>{e8.image}</div>
                        <div className={`bg-lime-600 basis-1/8 flex justify-center border-2 ${(pieceSelected === 'f8') ? 'border-black border-collapse ring-inset' : 'border-transparent'}`} onClick={() => spotHighlight('f8', f8)}>{f8.image}</div>
                        <div className={`bg-orange-50 basis-1/8 flex justify-center border-2 ${(pieceSelected === 'g8') ? 'border-black border-collapse ring-inset' : 'border-transparent'}`} onClick={() => spotHighlight('g8', g8)}>{g8.image}</div>
                        <div className={`bg-lime-600 basis-1/8 flex justify-center border-2 ${(pieceSelected === 'h8') ? 'border-black border-collapse ring-inset' : 'border-transparent'}`} onClick={() => spotHighlight('h8', h8)}>{h8.image}</div>
                    </div>
                    <div className="flex"> {/* row 7 */}
                        <div className={`bg-lime-600 basis-1/8 border-2 ${(pieceSelected === 'a7') ? 'border-black border-collapse ring-inset' : 'border-transparent'}`} onClick={() => spotHighlight('a7', a7)}>
                            <h1 className="absolute">7</h1>
                            <div className="flex justify-center">{a7.image}</div>
                        </div>
                        <div className={`bg-orange-50 basis-1/8 flex justify-center border-2 ${(pieceSelected === 'b7') ? 'border-black border-collapse ring-inset' : 'border-transparent'}`} onClick={() => spotHighlight('b7', b7)}>{b7.image}</div>
                        <div className={`bg-lime-600 basis-1/8 flex justify-center border-2 ${(pieceSelected === 'c7') ? 'border-black border-collapse ring-inset' : 'border-transparent'}`} onClick={() => spotHighlight('c7', c7)}>{c7.image}</div>
                        <div className={`bg-orange-50 basis-1/8 flex justify-center border-2 ${(pieceSelected === 'd7') ? 'border-black border-collapse ring-inset' : 'border-transparent'}`} onClick={() => spotHighlight('d7', d7)}>{d7.image}</div>
                        <div className={`bg-lime-600 basis-1/8 flex justify-center border-2 ${(pieceSelected === 'e7') ? 'border-black border-collapse ring-inset' : 'border-transparent'}`} onClick={() => spotHighlight('e7', e7)}>{e7.image}</div>
                        <div className={`bg-orange-50 basis-1/8 flex justify-center border-2 ${(pieceSelected === 'f7') ? 'border-black border-collapse ring-inset' : 'border-transparent'}`} onClick={() => spotHighlight('f7', f7)}>{f7.image}</div>
                        <div className={`bg-lime-600 basis-1/8 flex justify-center border-2 ${(pieceSelected === 'g7') ? 'border-black border-collapse ring-inset' : 'border-transparent'}`} onClick={() => spotHighlight('g7', g7)}>{g7.image}</div>
                        <div className={`bg-orange-50 basis-1/8 flex justify-center border-2 ${(pieceSelected === 'h7') ? 'border-black border-collapse ring-inset' : 'border-transparent'}`} onClick={() => spotHighlight('h7', h7)}>{h7.image}</div>
                    </div>
                    <div className="flex"> {/* row 6 */}
                        <div className={`bg-orange-50 basis-1/8  border-2 ${(pieceSelected === 'a6') ? 'border-black border-collapse ring-inset' : 'border-transparent'}`} onClick={() => spotHighlight('a6', a6)}>
                            <h1 className="absolute">6</h1>
                            <div className="flex justify-center">{a6.image}</div>
                        </div>
                        <div className={`bg-lime-600 basis-1/8 flex justify-center border-2 ${(pieceSelected === 'b6') ? 'border-black border-collapse ring-inset' : 'border-transparent'}`} onClick={() => spotHighlight('b6', b6)}>{b6.image}</div>
                        <div className={`bg-orange-50 basis-1/8 flex justify-center border-2 ${(pieceSelected === 'c6') ? 'border-black border-collapse ring-inset' : 'border-transparent'}`} onClick={() => spotHighlight('c6', c6)}>{c6.image}</div>
                        <div className={`bg-lime-600 basis-1/8 flex justify-center border-2 ${(pieceSelected === 'd6') ? 'border-black border-collapse ring-inset' : 'border-transparent'}`} onClick={() => spotHighlight('d6', d6)}>{d6.image}</div>
                        <div className={`bg-orange-50 basis-1/8 flex justify-center border-2 ${(pieceSelected === 'e6') ? 'border-black border-collapse ring-inset' : 'border-transparent'}`} onClick={() => spotHighlight('e6', e6)}>{e6.image}</div>
                        <div className={`bg-lime-600 basis-1/8 flex justify-center border-2 ${(pieceSelected === 'f6') ? 'border-black border-collapse ring-inset' : 'border-transparent'}`} onClick={() => spotHighlight('f6', f6)}>{f6.image}</div>
                        <div className={`bg-orange-50 basis-1/8 flex justify-center border-2 ${(pieceSelected === 'g6') ? 'border-black border-collapse ring-inset' : 'border-transparent'}`} onClick={() => spotHighlight('g6', g6)}>{g6.image}</div>
                        <div className={`bg-lime-600 basis-1/8 flex justify-center border-2 ${(pieceSelected === 'h6') ? 'border-black border-collapse ring-inset' : 'border-transparent'}`} onClick={() => spotHighlight('h6', h6)}>{h6.image}</div>
                    </div>  
                    <div className="flex"> {/* row 5 */}
                        <div className={`bg-lime-600 basis-1/8  border-2 ${(pieceSelected === 'a5') ? 'border-black border-collapse ring-inset' : 'border-transparent'}`} onClick={() => spotHighlight('a5', a5)}>
                            <h1 className="absolute">5</h1>
                            <div className="flex justify-center">{a5.image}</div>
                        </div>
                        <div className={`bg-orange-50 basis-1/8 flex justify-center border-2 ${(pieceSelected === 'b5') ? 'border-black border-collapse ring-inset' : 'border-transparent'}`} onClick={() => spotHighlight('b5', b5)}>{b5.image}</div>
                        <div className={`bg-lime-600 basis-1/8 flex justify-center border-2 ${(pieceSelected === 'c5') ? 'border-black border-collapse ring-inset' : 'border-transparent'}`} onClick={() => spotHighlight('c5', c5)}>{c5.image}</div>
                        <div className={`bg-orange-50 basis-1/8 flex justify-center border-2 ${(pieceSelected === 'd5') ? 'border-black border-collapse ring-inset' : 'border-transparent'}`} onClick={() => spotHighlight('d5', d5)}>{d5.image}</div>
                        <div className={`bg-lime-600 basis-1/8 flex justify-center border-2 ${(pieceSelected === 'e5') ? 'border-black border-collapse ring-inset' : 'border-transparent'}`} onClick={() => spotHighlight('e5', e5)}>{e5.image}</div>
                        <div className={`bg-orange-50 basis-1/8 flex justify-center border-2 ${(pieceSelected === 'f5') ? 'border-black border-collapse ring-inset' : 'border-transparent'}`} onClick={() => spotHighlight('f5', f5)}>{f5.image}</div>
                        <div className={`bg-lime-600 basis-1/8 flex justify-center border-2 ${(pieceSelected === 'g5') ? 'border-black border-collapse ring-inset' : 'border-transparent'}`} onClick={() => spotHighlight('g5', g5)}>{g5.image}</div>
                        <div className={`bg-orange-50 basis-1/8 flex justify-center  border-2 ${(pieceSelected === 'h5') ? 'border-black border-collapse ring-inset' : 'border-transparent'}`} onClick={() => spotHighlight('h5', h5)}>{h5.image}</div>
                    </div>
                    <div className="flex"> {/* row 4 */}
                        <div className={`bg-orange-50 basis-1/8 border-2 ${(pieceSelected === 'a4') ? 'border-black border-collapse ring-inset' : 'border-transparent'}`} onClick={() => spotHighlight('a4', a4)}>
                            <h1 className="absolute">4</h1>
                            <div className="flex justify-center">{a4.image}</div>
                        </div>
                        <div className={`bg-lime-600 basis-1/8 flex justify-center border-2 ${(pieceSelected === 'b4') ? 'border-black border-collapse ring-inset' : 'border-transparent'}`} onClick={() => spotHighlight('b4', b4)}>{b4.image}</div>
                        <div className={`bg-orange-50 basis-1/8 flex justify-center border-2 ${(pieceSelected === 'c4') ? 'border-black border-collapse ring-inset' : 'border-transparent'}`} onClick={() => spotHighlight('c4', c4)}>{c4.image}</div>
                        <div className={`bg-lime-600 basis-1/8 flex justify-center  border-2 ${(pieceSelected === 'd4') ? 'border-black border-collapse ring-inset' : 'border-transparent'}`} onClick={() => spotHighlight('d4', d4)}>{d4.image}</div>
                        <div className={`bg-orange-50 basis-1/8 flex justify-center border-2 ${(pieceSelected === 'e4') ? 'border-black border-collapse ring-inset' : 'border-transparent'}`} onClick={() => spotHighlight('e4', e4)}>{e4.image}</div>
                        <div className={`bg-lime-600 basis-1/8 flex justify-center border-2 ${(pieceSelected === 'f4') ? 'border-black border-collapse ring-inset' : 'border-transparent'}`} onClick={() => spotHighlight('f4', f4)}>{f4.image}</div>
                        <div className={`bg-orange-50 basis-1/8 flex justify-center border-2 ${(pieceSelected === 'g4') ? 'border-black border-collapse ring-inset' : 'border-transparent'}`} onClick={() => spotHighlight('g4', g4)}>{g4.image}</div>
                        <div className={`bg-lime-600 basis-1/8 flex justify-center border-2 ${(pieceSelected === 'h4') ? 'border-black border-collapse ring-inset' : 'border-transparent'}`} onClick={() => spotHighlight('h4', h4)}>{h4.image}</div>
                    </div>
                    <div className="flex"> {/* row 3 */}
                        <div className={`bg-lime-600 basis-1/8 border-2 ${(pieceSelected === 'a3') ? 'border-black border-collapse ring-inset' : 'border-transparent'}`} onClick={() => spotHighlight('a3', a3)}>
                            <h1 className="absolute">3</h1>
                            <div className="flex justify-center">{a3.image}</div>
                        </div>
                        <div className={`bg-orange-50 basis-1/8 flex justify-center border-2 ${(pieceSelected === 'b3') ? 'border-black border-collapse ring-inset' : 'border-transparent'}`} onClick={() => spotHighlight('b3', b3)}>{b3.image}</div>
                        <div className={`bg-lime-600 basis-1/8 flex justify-center border-2 ${(pieceSelected === 'c3') ? 'border-black border-collapse ring-inset' : 'border-transparent'}`} onClick={() => spotHighlight('c3', c3)}>{c3.image}</div>
                        <div className={`bg-orange-50 basis-1/8 flex justify-center border-2 ${(pieceSelected === 'd3') ? 'border-black border-collapse ring-inset' : 'border-transparent'}`} onClick={() => spotHighlight('d3', d3)}>{d3.image}</div>
                        <div className={`bg-lime-600 basis-1/8 flex justify-center border-2 ${(pieceSelected === 'e3') ? 'border-black border-collapse ring-inset' : 'border-transparent'}`} onClick={() => spotHighlight('e3', e3)}>{e3.image}</div>
                        <div className={`bg-orange-50 basis-1/8 flex justify-center border-2 ${(pieceSelected === 'f3') ? 'border-black border-collapse ring-inset' : 'border-transparent'}`} onClick={() => spotHighlight('f3', f3)}>{f3.image}</div>
                        <div className={`bg-lime-600 basis-1/8 flex justify-center border-2 ${(pieceSelected === 'g3') ? 'border-black border-collapse ring-inset' : 'border-transparent'}`} onClick={() => spotHighlight('g3', g3)}>{g3.image}</div>
                        <div className={`bg-orange-50 basis-1/8 flex justify-center border-2 ${(pieceSelected === 'h3') ? 'border-black border-collapse ring-inset' : 'border-transparent'}`} onClick={() => spotHighlight('h1', h1)}>{h3.image}</div>
                    </div>
                    <div className="flex"> {/* row 2 */}
                        <div className={`bg-orange-50 basis-1/8 border-2 ${(pieceSelected === 'a2') ? 'border-black border-collapse ring-inset' : 'border-transparent'}`} onClick={() => spotHighlight('a2', a2)}>
                            <h1 className="absolute">2</h1>
                            <div className="flex justify-center">{a2.image}</div>
                        </div>
                        <div className={`bg-lime-600 basis-1/8 flex justify-center border-2 ${(pieceSelected === 'b2') ? 'border-black border-collapse ring-inset' : 'border-transparent'}`} onClick={() => spotHighlight('b2', b2)}>{b2.image}</div>
                        <div className={`bg-orange-50 basis-1/8 flex justify-center border-2 ${(pieceSelected === 'c2') ? 'border-black border-collapse ring-inset' : 'border-transparent'}`} onClick={() => spotHighlight('c2', c2)}>{c2.image}</div>
                        <div className={`bg-lime-600 basis-1/8 flex justify-center border-2 ${(pieceSelected === 'd2') ? 'border-black border-collapse ring-inset' : 'border-transparent'}`} onClick={() => spotHighlight('d2', d2)}>{d2.image}</div>
                        <div className={`bg-orange-50 basis-1/8 flex justify-center border-2 ${(pieceSelected === 'e2') ? 'border-black border-collapse ring-inset' : 'border-transparent'}`} onClick={() => spotHighlight('e2', e2)}>{e2.image}</div>
                        <div className={`bg-lime-600 basis-1/8 flex justify-center border-2 ${(pieceSelected === 'f2') ? 'border-black border-collapse ring-inset' : 'border-transparent'}`} onClick={() => spotHighlight('f2', f2)}>{f2.image}</div>
                        <div className={`bg-orange-50 basis-1/8 flex justify-center  border-2 ${(pieceSelected === 'g2') ? 'border-black border-collapse ring-inset' : 'border-transparent'}`} onClick={() => spotHighlight('g2', g2)}>{g2.image}</div>
                        <div className={`bg-lime-600 basis-1/8 flex justify-center border-2 ${(pieceSelected === 'h2') ? 'border-black border-collapse ring-inset' : 'border-transparent'}`} onClick={() => spotHighlight('h2', h2)}>{h2.image}</div>
                    </div>
                    <div className="flex"> {/* row 1 */}
                        <div className={`bg-lime-600 basis-1/8 w-15 h-15 flex flex-col justify-between border-2 ${(pieceSelected === 'a1') ? 'border-black border-collapse ring-inset' : 'border-transparent'}`} onClick={() => spotHighlight('a1', a1)}>
                            <h1>1</h1>
                            <div className="absolute">{a1.image}</div>
                            <h1 className="text-right pr-1">a</h1>
                        </div>
                        <div className={`bg-orange-50 basis-1/8 flex flex-col-reverse border-2 ${(pieceSelected === 'b1') ? 'border-black border-collapse ring-inset' : 'border-transparent'}`} onClick={() => spotHighlight('b1', b1)}>
                            <div className="absolute">{b1.image}</div>
                            <h1 className="text-right pr-1">b</h1>
                        </div>
                        <div className={`bg-lime-600 basis-1/8 flex flex-col-reverse border-2 ${(pieceSelected === 'c1') ? 'border-black border-collapse ring-inset' : 'border-transparent'}`} onClick={() => spotHighlight('c1', c1)}>
                        <div className="absolute">{c1.image}</div>
                            <h1 className="text-right pr-1">c</h1>
                        </div>
                        <div className={`bg-orange-50 basis-1/8 flex flex-col-reverse border-2 ${(pieceSelected === 'd1') ? 'border-black border-collapse ring-inset' : 'border-transparent'}`} onClick={() => spotHighlight('d1', d1)}>
                            <div className="absolute">{d1.image}</div>
                            <h1 className="text-right pr-1">d</h1>
                        </div>
                        <div className={`bg-lime-600 basis-1/8 flex flex-col-reverse border-2 ${(pieceSelected === 'e1') ? 'border-black border-collapse ring-inset' : 'border-transparent'}`} onClick={() => spotHighlight('e1', e1)}>
                            <div className="absolute">{e1.image}</div>
                            <h1 className="text-right pr-1">e</h1>
                        </div>
                        <div className={`bg-orange-50 basis-1/8 flex flex-col-reverse border-2 ${(pieceSelected === 'f1') ? 'border-black border-collapse ring-inset' : 'border-transparent'}`} onClick={() => spotHighlight('f1', f1)}>
                            <div className="absolute">{f1.image}</div>
                            <h1 className="text-right pr-1">f</h1>
                        </div>
                        <div className={`bg-lime-600 basis-1/8 flex flex-col-reverse border-2 ${(pieceSelected === 'g1') ? 'border-black border-collapse ring-inset' : 'border-transparent'}`} onClick={() => spotHighlight('g1', g1)}>
                            <div className="absolute">{g1.image}</div>
                            <h1 className="text-right pr-1">g</h1>
                        </div>
                        <div className={`bg-orange-50 basis-1/8 flex flex-col-reverse border-2 ${(pieceSelected === 'h1') ? 'border-black border-collapse ring-inset' : 'border-transparent'}`} onClick={() => spotHighlight('h1', h1)}>
                            <div className="absolute">{h1.image}</div>
                            <h1 className="text-right pr-1">h</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}