'use client'
import Nav from "../components/nav"
import { useState } from "react"
import Image from "next/image"

export default function Chess() {

    let emptySpot = <div className="w-15 h-15"></div>

    function chessIcon(color, type) {
        let image = <Image 
            src={`/images/chesspieces/${color}${type}.png`}
            alt={`A ${color} ${type}`}
            width={60}
            height={60}
        />
        return image
    }

    // let chessPieces

    let [a1, setA1] = useState(chessIcon('white', 'Rook'))
    let [b1, setB1] = useState(chessIcon('white', 'Knight'))
    let [c1, setC1] = useState(chessIcon('white', 'Bishop'))
    let [d1, setD1] = useState(chessIcon('white', 'Queen'))
    let [e1, setE1] = useState(chessIcon('white', 'King'))
    let [f1, setF1] = useState(chessIcon('white', 'Bishop'))
    let [g1, setG1] = useState(chessIcon('white', 'Knight'))
    let [h1, setH1] = useState(chessIcon('white', 'Rook'))
    let [a2, setA2] = useState(chessIcon('white', 'Pawn'))
    let [b2, setB2] = useState(chessIcon('white', 'Pawn'))
    let [c2, setC2] = useState(chessIcon('white', 'Pawn'))
    let [d2, setD2] = useState(chessIcon('white', 'Pawn'))
    let [e2, setE2] = useState(chessIcon('white', 'Pawn'))
    let [f2, setF2] = useState(chessIcon('white', 'Pawn'))
    let [g2, setG2] = useState(chessIcon('white', 'Pawn'))
    let [h2, setH2] = useState(chessIcon('white', 'Pawn'))

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

    let [a7, setA7] = useState(chessIcon('black', 'Pawn'))
    let [b7, setB7] = useState(chessIcon('black', 'Pawn'))
    let [c7, setC7] = useState(chessIcon('black', 'Pawn'))
    let [d7, setD7] = useState(chessIcon('black', 'Pawn'))
    let [e7, setE7] = useState(chessIcon('black', 'Pawn'))
    let [f7, setF7] = useState(chessIcon('black', 'Pawn'))
    let [g7, setG7] = useState(chessIcon('black', 'Pawn'))
    let [h7, setH7] = useState(chessIcon('black', 'Pawn'))
    let [a8, setA8] = useState(chessIcon('black', 'Rook'))
    let [b8, setB8] = useState(chessIcon('black', 'Knight'))
    let [c8, setC8] = useState(chessIcon('black', 'Bishop'))
    let [d8, setD8] = useState(chessIcon('black', 'Queen'))
    let [e8, setE8] = useState(chessIcon('black', 'King'))
    let [f8, setF8] = useState(chessIcon('black', 'Bishop'))
    let [g8, setG8] = useState(chessIcon('black', 'Knight'))
    let [h8, setH8] = useState(chessIcon('black', 'Rook'))
    

    return (
        <>
            <Nav />
            <h1>Chess</h1>
            <div className="flex justify-center">
                {/* grid grid-cols-8 grid-rows-8 auto-cols-max auto-rows-max*/}
                <div className="flex flex-col border-black border-4">
                    <div className="flex"> {/* row 8 */}
                        <div className="bg-orange-50 basis-1/8">
                            <h1 className="absolute">8</h1>
                            <div className="absolute">{a8}</div>  
                        </div>
                        <div className="bg-lime-600 basis-1/8 flex justify-center">{b8}</div>
                        <div className="bg-orange-50 basis-1/8 flex justify-center">{c8}</div>
                        <div className="bg-lime-600 basis-1/8 flex justify-center">{d8}</div>
                        <div className="bg-orange-50 basis-1/8 flex justify-center">{e8}</div>
                        <div className="bg-lime-600 basis-1/8 flex justify-center">{f8}</div>
                        <div className="bg-orange-50 basis-1/8 flex justify-center">{g8}</div>
                        <div className="bg-lime-600 basis-1/8 flex justify-center">{h8}</div>
                    </div>
                    <div className="flex"> {/* row 7 */}
                        <div className="bg-lime-600 basis-1/8">
                            <h1 className="absolute">7</h1>
                            <div className="flex justify-center">{a7}</div>
                        </div>
                        <div className="bg-orange-50 basis-1/8 flex justify-center">{b7}</div>
                        <div className="bg-lime-600 basis-1/8 flex justify-center">{c7}</div>
                        <div className="bg-orange-50 basis-1/8 flex justify-center">{d7}</div>
                        <div className="bg-lime-600 basis-1/8 flex justify-center">{e7}</div>
                        <div className="bg-orange-50 basis-1/8 flex justify-center">{f7}</div>
                        <div className="bg-lime-600 basis-1/8 flex justify-center">{g7}</div>
                        <div className="bg-orange-50 basis-1/8 flex justify-center">{h7}</div>
                    </div>
                    <div className="flex"> {/* row 6 */}
                        <div className="bg-orange-50 basis-1/8">
                            <h1 className="absolute">6</h1>
                            <div className="flex justify-center">{a6}</div>
                        </div>
                        <div className="bg-lime-600 basis-1/8 flex justify-center">{b6}</div>
                        <div className="bg-orange-50 basis-1/8 flex justify-center">{c6}</div>
                        <div className="bg-lime-600 basis-1/8 flex justify-center">{d6}</div>
                        <div className="bg-orange-50 basis-1/8 flex justify-center">{e6}</div>
                        <div className="bg-lime-600 basis-1/8 flex justify-center">{f6}</div>
                        <div className="bg-orange-50 basis-1/8 flex justify-center">{g6}</div>
                        <div className="bg-lime-600 basis-1/8 flex justify-center">{h6}</div>
                    </div>  
                    <div className="flex"> {/* row 5 */}
                        <div className="bg-lime-600 basis-1/8">
                            <h1 className="absolute">5</h1>
                            <div className="flex justify-center">{a5}</div>
                        </div>
                        <div className="bg-orange-50 basis-1/8 flex justify-center">{b5}</div>
                        <div className="bg-lime-600 basis-1/8 flex justify-center">{c6}</div>
                        <div className="bg-orange-50 basis-1/8 flex justify-center">{d6}</div>
                        <div className="bg-lime-600 basis-1/8 flex justify-center">{e6}</div>
                        <div className="bg-orange-50 basis-1/8 flex justify-center">{f6}</div>
                        <div className="bg-lime-600 basis-1/8 flex justify-center">{g6}</div>
                        <div className="bg-orange-50 basis-1/8 flex justify-center">{h6}</div>
                    </div>
                    <div className="flex"> {/* row 4 */}
                        <div className="bg-orange-50 basis-1/8">
                            <h1 className="absolute">4</h1>
                            <div className="flex justify-center">{a4}</div>
                        </div>
                        <div className="bg-lime-600 basis-1/8 flex justify-center">{b4}</div>
                        <div className="bg-orange-50 basis-1/8 flex justify-center">{c4}</div>
                        <div className="bg-lime-600 basis-1/8 flex justify-center">{d4}</div>
                        <div className="bg-orange-50 basis-1/8 flex justify-center">{e4}</div>
                        <div className="bg-lime-600 basis-1/8 flex justify-center">{f4}</div>
                        <div className="bg-orange-50 basis-1/8 flex justify-center">{g4}</div>
                        <div className="bg-lime-600 basis-1/8 flex justify-center">{h4}</div>
                    </div>
                    <div className="flex"> {/* row 3 */}
                        <div className="bg-lime-600 basis-1/8">
                            <h1 className="absolute">3</h1>
                            <div className="flex justify-center">{a3}</div>
                        </div>
                        <div className="bg-orange-50 basis-1/8 flex justify-center">{b3}</div>
                        <div className="bg-lime-600 basis-1/8 flex justify-center">{c3}</div>
                        <div className="bg-orange-50 basis-1/8 flex justify-center">{d3}</div>
                        <div className="bg-lime-600 basis-1/8 flex justify-center">{e3}</div>
                        <div className="bg-orange-50 basis-1/8 flex justify-center">{f3}</div>
                        <div className="bg-lime-600 basis-1/8 flex justify-center">{g3}</div>
                        <div className="bg-orange-50 basis-1/8 flex justify-center">{h3}</div>
                    </div>
                    <div className="flex"> {/* row 2 */}
                        <div className="bg-orange-50 basis-1/8">
                            <h1 className="absolute">2</h1>
                            <div className="flex justify-center">{a2}</div>
                        </div>
                        <div className="bg-lime-600 basis-1/8 flex justify-center">{b2}</div>
                        <div className="bg-orange-50 basis-1/8 flex justify-center">{c2}</div>
                        <div className="bg-lime-600 basis-1/8 flex justify-center">{d2}</div>
                        <div className="bg-orange-50 basis-1/8 flex justify-center">{e2}</div>
                        <div className="bg-lime-600 basis-1/8 flex justify-center">{f2}</div>
                        <div className="bg-orange-50 basis-1/8 flex justify-center">{g2}</div>
                        <div className="bg-lime-600 basis-1/8 flex justify-center">{h2}</div>
                    </div>
                    <div className="flex"> {/* row 1 */}
                        <div className="bg-lime-600 basis-1/8 w-15 h-15 flex flex-col justify-between">
                            <h1>1</h1>
                            <div className="absolute">{a1}</div>
                            <h1 className="text-right pr-1">a</h1>
                        </div>
                        <div className="bg-orange-50 basis-1/8 flex flex-col-reverse">
                            <div className="absolute">{b1}</div>
                            <h1 className="text-right pr-1">b</h1>
                        </div>
                        <div className="bg-lime-600 basis-1/8 flex flex-col-reverse">
                        <div className="absolute">{c1}</div>
                            <h1 className="text-right pr-1">c</h1>
                        </div>
                        <div className="bg-orange-50 basis-1/8 flex flex-col-reverse">
                            <div className="absolute">{d1}</div>
                            <h1 className="text-right pr-1">d</h1>
                        </div>
                        <div className="bg-lime-600 basis-1/8 flex flex-col-reverse">
                            <div className="absolute">{e1}</div>
                            <h1 className="text-right pr-1">e</h1>
                        </div>
                        <div className="bg-orange-50 basis-1/8 flex flex-col-reverse">
                            <div className="absolute">{f1}</div>
                            <h1 className="text-right pr-1">f</h1>
                        </div>
                        <div className="bg-lime-600 basis-1/8 flex flex-col-reverse">
                            <div className="absolute">{g1}</div>
                            <h1 className="text-right pr-1">g</h1>
                        </div>
                        <div className="bg-orange-50 basis-1/8 flex flex-col-reverse">
                            <div className="absolute">{h1}</div>
                            <h1 className="text-right pr-1">h</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}