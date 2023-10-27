'use client'
import { useState } from "react"
import Deck from "../components/deck"
import Image from "next/image"

export default function Blackjack() {
    const [userHand, setUserHand] = useState([])
    const [userScore, setUserScore] = useState(0)
    const [houseHand, setHouseHand] = useState([])
    const [houseScore, setHouseScore] = useState(0)
    const [gameState, setGameState] = useState(0)
    const [deck, setDeck] = useState(null);
    const [disable, setDisable] = useState(false)

    function startGame() {
        console.log('Start new game')
        let restartDeck = new Deck()
        restartDeck.shuffle()
        const user = []
        const house = []
        const players = [user, house]
        restartDeck.startingDeal(2, players)
        setDeck(restartDeck)
        setUserHand(players[0])
        setHouseHand(players[1])
        setGameState(1)
        const userScore = calculateScore(players[0], 'user')
        const houseScore = calculateScore(players[1], 'house')
        calculateCondition(userScore, 'user')
        calculateCondition(houseScore, 'house')
    }

    function hitPlayer() {
        if (!disable) {
            let newHand = userHand.slice()
            let newCard = deck.deal1()
            console.log('new card', newCard)
            newHand.push(newCard)
            setUserHand(newHand)
            const score = calculateScore(newHand, 'user')
            calculateCondition(score, 'user')
        }
    }

    function calculateScore(hand, player) {
        console.log(hand)
        let newScore = 0
        let aceCount = 0
        for (let x = 0; x < hand.length; x++) {
            // console.log(hand[x][0], Number.isInteger(hand[x][0]))
            if (hand[x][0] === 'jack' || hand[x][0] === 'queen' || hand[x][0] === 'king') {
                newScore += 10
            }
            if (hand[x][0] === 'ace') {
                newScore += 11
                aceCount += 1
            }
            if (Number.isInteger(hand[x][0])) {
                newScore += hand[x][0]
            }
        }

        while (newScore > 21 && aceCount > 0) {
            newScore -= 10;
            aceCount--;
        }
        
        if (player === 'user') {
            setUserScore(newScore)
        }
        if (player === 'house') {
            setHouseScore(newScore)
        }
        console.log(`${player} newScore`, newScore)
        // console.log('isUserHand', player === 'user')
        // console.log('isHouseHand', player === 'house')
        return newScore
    }

    function calculateCondition(score, player) {
        if (player === 'user') {
            if (score === 21) {
                console.log('Blackjack you win')
                setDisable(true)
            }
            if (score > 21) {
                console.log('You Bust')
                setDisable(true)
            }
        }
    }
    
    let board = <></>
    if (gameState === 1) {

        let houseDisplayHand = houseHand.map((card, index) => {
            let findSuite = 'default'
            if (card[1] === 0) {
                findSuite = 'diamonds'
            }
            if (card[1] === 1) {
                findSuite = 'clubs'
            }
            if (card[1] === 2) {
                findSuite = 'hearts'
            }
            if (card[1] === 3) {
                findSuite = 'spades'
            }
            

            // <img key={index}>{`${houseHand[index][0]} of ${findSuite}`}</>})

            return (
                <Image
                    src={`/images/deckofcards/${houseHand[index][0]}_of_${findSuite}.png`} //
                    alt={`Picture of ${houseHand[index][0]} of ${findSuite}`}
                    width={100}
                    height={100}
                    key={index}
                />
            )
            })

        let userDisplayHand = userHand.map((card, index) => {
            let findSuite = 'default'
            if (card[1] === 0) {
                findSuite = 'diamonds'
            }
            if (card[1] === 1) {
                findSuite = 'clubs'
            }
            if (card[1] === 2) {
                findSuite = 'hearts'
            }
            if (card[1] === 3) {
                findSuite = 'spades'
            }
            return (
                <Image
                    src={`/images/deckofcards/${card[0]}_of_${findSuite}.png`} //
                    alt={`Picture of ${card[0]} of ${findSuite}`}
                    width={100}
                    height={100}
                    key={index}
                />
            )
            // return <p key={index}>{`${userHand[index][0]} of ${findSuite}`}</p>
        })

        board = <>
            <div className="mt-4 mb-4 w-1/2 flex flex-col">
                {/* House Icon */}
                <h1 className="text-3xl text-center">The House</h1>
                <div className="flex justify-evenly">
                    {houseDisplayHand}
                </div>
            </div>
            <div className="basis-2/3">
                <h1 className="text-3xl mt-4 mb-4">The Deck</h1>
            </div>
            <div className="mt-4 mb-4 w-1/2 flex flex-col">
                <div className="flex justify-evenly w-auto">
                    {userDisplayHand}
                </div>
                <h1 className="text-3xl text-center">You</h1>
            </div>
            <div className="flex w-1/2 justify-evenly">
                <button className="text-3xl bg-sky-200 py-2 px-4 rounded-full" onClick={() => hitPlayer()}>Hit</button>
                <button className="text-3xl bg-sky-200 py-2 px-4 rounded-full">Stand</button>
            </div>
        </>
    }

    

    return (
        <>
            <div className="flex justify-center">
            <h1 className="text-5xl text-center m-4">Blackjack</h1>
                <button onClick={startGame} className="text-3xl bg-sky-200 py-2 px-4 rounded-full">{(gameState === 0) ? 'Start Game' : 'Replay'}</button>
            </div>
            <div className="flex items-center flex-col mt-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {(gameState === 0) ? <></> : board}
            </div>
        </>
    )
}