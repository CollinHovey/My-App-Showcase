'use client'
import { useState } from "react"
import Deck from "../components/deck"

export default function Blackjack() {
    const [userHand, setuserHand] = useState([])
    const [houseHand, sethouseHand] = useState([])
    let newDeck = new Deck()
    const [deck, setDeck] = useState(newDeck);

    function startGame() {
        console.log('the game has started');
        console.log('pre shuffle', deck.show())
        deck.shuffle()

        console.log('post shuffle', deck.show())
    }

    return (
        <>
            <h1>Welcome To Blackjack</h1>
            <button onClick={startGame}>Let's Play</button>
        </>
    )
}