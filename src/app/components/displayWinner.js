import { useState } from "react"

export default function DisplayWinner({ winner, startGame }) {

    let winName = ''
    if (winner === 'user') {
        winName = `You Win!`
    } else if (winner === 'house') {
        winName = `The House Wins!`
    } else if (winner === 'tie') {
        winName = `It's A Tie!`
    }



    return (
        <>
            <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <div className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                            <div className="mt-3 text-center sm:mt-5">
                                <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">{winName}</h3>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">Would you like to play again?</p>
                                </div>
                            </div>
                            <div className="mt-5 sm:mt-6 flex justify-between">
                                <a href="/" type="button" className="inline-flex w-2/5 justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Back to Home</a>
                                <button type="button" onClick={startGame} className="inline-flex w-2/5 justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Play Again</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}