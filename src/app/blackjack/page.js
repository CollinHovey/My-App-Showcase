'use client'
import { useState } from "react"
import Deck from "../components/deck"
import Image from "next/image"
import DisplayWinner from "../components/displayWinner"
import Nav from "../components/nav"

export default function Blackjack() {
    const [userHand, setUserHand] = useState([])
    const [userScore, setUserScore] = useState(0)
    const [houseHand, setHouseHand] = useState([])
    const [houseScore, setHouseScore] = useState(0)
    const [gameState, setGameState] = useState(0)
    const [deck, setDeck] = useState(null);
    const [disable, setDisable] = useState(false)
    const [displayEnd, setDisplayEnd] = useState(<></>)

    function startGame() {
        let restartDeck = new Deck()
        restartDeck.shuffle()
        const user = []
        const house = []
        const players = [user, house]
        restartDeck.startingDeal(2, players)
        setDisplayEnd(<></>)
        setDeck(restartDeck)
        setUserHand(players[0])
        setHouseHand(players[1])
        setGameState(1)
        setDisable(false)
        const userScore = calculateScore(players[0], 'user')
        const houseScore = calculateScore(players[1], 'house')
        calculateCondition(userScore, 'user')
        calculateCondition(houseScore, 'house')
    }

    function hitPlayer() {
        if (!disable) {
            let newHand = userHand.slice()
            let newCard = deck.deal1()
            newHand.push(newCard)
            setUserHand(newHand)
            const score = calculateScore(newHand, 'user')
            calculateCondition(score, 'user')
        }
    }

    function stand() {
        if (!disable) {
            setDisable(true)
            let houseFinalScore = housePlay()
            let gameEnded = calculateCondition(houseFinalScore, 'house')
            if (!gameEnded) {
                let winner = ''
                if (userScore > houseFinalScore) {
                    winner = 'user'
                } else if (houseFinalScore > 21) {
                    winner = 'user'
                } else if (userScore < houseFinalScore) {
                    winner = 'house'
                } else if (userScore === houseFinalScore) {
                    winner = 'tie'
                }
                endGame(winner)
            }
        }
        
    }

    function housePlay() {
        let currentHouseScore = houseScore
        let currentHand = houseHand.slice()
        let stop_plz = 0

        while (currentHouseScore < 17 && stop_plz < 40) {
            let newCard = deck.deal1()
            currentHand.push(newCard)
            setHouseHand(currentHand)
            currentHouseScore = calculateScore(currentHand, 'house')
            stop_plz++;
        }
        return currentHouseScore
    }

    function calculateScore(hand, player) {
        let newScore = 0
        let aceCount = 0
        for (let x = 0; x < hand.length; x++) {
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


        while ((newScore > 21 && aceCount > 0) || (player === 'house' && aceCount > 0 && newScore === 17)) {
            newScore -= 10;
            aceCount--;
            if (newScore > 21 && aceCount > 0) {
            } else if (player === 'house' && aceCount > 0 && newScore === 17) {
            } 
        }
        
        if (player === 'user') {
            setUserScore(newScore)
        } else if (player === 'house') {
            setHouseScore(newScore)
        }
        return newScore
    }

    function calculateCondition(score, player) {
        if (player === 'user') {
            if (score === 21) {
                setDisable(true)
                endGame('user')
            } else if (score > 21) {
                setDisable(true)
                endGame('house')
            } else {
                return false
            }
        }

        if (player === 'house') {
            if (score === 21) {
                setDisable(true)
                endGame('house')
            } else if (score > 21) {
                setDisable(true)
                endGame('user')
            } else {
                return false
            }
        }
    }

    function endGame(winner) {
        setDisplayEnd(<DisplayWinner winner={winner} startGame={startGame}/>)
    }
    
    let board = <></>
    if (gameState === 1) {

        let houseDisplayHand = houseHand.map((card, index) => {
            let imagePath = deck.getCardImagePath(card)

            return (
                <Image
                    src={imagePath}
                    alt={`Picture of ${card[0]} of ${deck.findSuite(card[1])}`}
                    width={100}
                    height={100}
                    key={index}
                />
            )
            })

        let userDisplayHand = userHand.map((card, index) => {
            let imagePath = deck.getCardImagePath(card)
            return (
                <Image
                    src={imagePath}
                    alt={`Picture of ${card[0]} of ${deck.findSuite(card[1])}`}
                    width={100}
                    height={100}
                    key={index}
                />
            )
        })

        board = <>
            <div className="mt-4 mb-4 w-1/2 flex flex-col">
                {/* House Icon */}
                <h1 className="text-3xl text-center">The House</h1>
                <div className="flex justify-evenly">
                    {houseDisplayHand}
                </div>
            </div>
            <div className="mt-4 mb-4 w-1/2 flex flex-col">
                <div className="flex justify-evenly w-auto">
                    {userDisplayHand}
                </div>
                <h1 className="text-3xl text-center">You</h1>
            </div>
            <div className="flex w-1/2 justify-evenly">
                <button className="text-3xl bg-sky-200 py-2 px-4 rounded-full" onClick={() => hitPlayer()}>Hit</button>
                <button className="text-3xl bg-sky-200 py-2 px-4 rounded-full"onClick={() => stand()}>Stand</button>
            </div>
        </>
    }

    

    return (
        <>
            {displayEnd}
            <Nav />
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