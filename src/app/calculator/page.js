'use client'
import Nav from "../components/nav"
import { useState } from "react"

export default function Calculator() {

    const [inputValue, setInputValue] = useState('4 * 4')
    const [hasTyped, setHasTyped] = useState('text-slate-400')
    const [disable, setDisable] = useState(false)
    const [answer, setAnswer] = useState(8)
    const [showAnswer, setShowAnswer] = useState('text-slate-400')

    function input(button) {
        if (!disable) {
            let oldInput = inputValue
            let isFirst = false
            if (inputValue === '4 * 4') {
                oldInput = ''
                isFirst = true
                if (button === '/' || button === '*' || button === '-' || button === '+') {
                } else {
                    setHasTyped('text-white')
                }
            }
            if (button === '/' || button === '*' || button === '-' || button === '+') {
                if ((isFirst) || ((oldInput.charAt(oldInput.length - 1)) === '/' || (oldInput.charAt(oldInput.length - 1)) === '*' || (oldInput.charAt(oldInput.length - 1)) === '-' || (oldInput.charAt(oldInput.length - 1)) === '+')) {
                } else {
                    setInputValue(oldInput + button)
                }
            } else {
                setInputValue(oldInput + button)
            }
        }
    }

    function clear() {
        setInputValue('4 * 4')
        setHasTyped('text-slate-400')
        setAnswer(8)
        setShowAnswer('text-slate-400')
        setDisable(false)
    }

    function calculate() {
        if (!disable) {
            let finalEquation = inputValue
            let lastInput = finalEquation.charAt(finalEquation.length - 1)
            if (lastInput === '/' || lastInput === '*' || lastInput === '-' || lastInput === '+') {
                finalEquation = finalEquation.slice(0, -1)
            }
            let operators = ''
            for (let x = 0; x < finalEquation.length; x++) {
                if (finalEquation[x] === '-' || finalEquation[x] === '+' || finalEquation[x] === '/' || finalEquation[x] === '*') {
                    operators += finalEquation[x]
                }
            }
            let splitFunction = finalEquation.split(/[-+/*]+/)
            let total = 0
            for (let x = 0; x < splitFunction.length; x++) {
                if (x === 0) {
                    total = Number(splitFunction[x])
                } else {
                    let operator = operators[x - 1]
                    let number = Number(splitFunction[x])
                    if (operator === '-') {
                        total -= number
                    } else if (operator === '+') {
                        total += number
                    } else if (operator === '*') {
                        total *= number
                    } else if (operator === '/') {
                        total /= number
                    }
                }
            }
            total = (Math.round(total * 100) / 100)
            setInputValue(finalEquation)
            setDisable(true)
            setAnswer(total)
            setShowAnswer('text-white')
        }
    }

    return (
        <>
            <Nav />
            <div className="flex justify-center mt-8">
                <div className="w-2/4 bg-slate-200 border-slate-600 rounded-sm border-8">
                    <div className="flex-col">
                        <h1 className={`w-full bg-slate-600 ${hasTyped} text-4xl p-2 text-right border-slate-200 border-2`}>{inputValue}</h1>
                        <h1 className={`w-full bg-slate-600 ${showAnswer} text-6xl p-2 text-right border-slate-200 border-2`}>{answer}</h1>
                        <div className="grid grid-cols-4 pt-2 pr-2 pl-2">
                            <button onClick={() => input(7)} className="text-3xl bg-cyan-100 p-2 rounded-lg hover:bg-cyan-300 ease-out duration-200 m-1 basis-full">7</button>
                            <button onClick={() => input(8)} className="text-3xl bg-cyan-100 p-2 rounded-lg hover:bg-cyan-300 ease-out duration-200 m-1 basis-full">8</button>
                            <button onClick={() => input(9)} className="text-3xl bg-cyan-100 p-2 rounded-lg hover:bg-cyan-300 ease-out duration-200 m-1 basis-full">9</button>
                            <button onClick={() => input('/')} className="text-3xl bg-cyan-100 p-2 rounded-lg hover:bg-cyan-300 ease-out duration-200 m-1 basis-full">/</button>
                        </div>
                        <div className="grid grid-cols-4 pr-2 pl-2">
                            <button onClick={() => input(4)} className="text-3xl bg-cyan-100 p-2 rounded-lg hover:bg-cyan-300 ease-out duration-200 m-1 basis-full">4</button>
                            <button onClick={() => input(5)} className="text-3xl bg-cyan-100 p-2 rounded-lg hover:bg-cyan-300 ease-out duration-200 m-1 basis-full">5</button>
                            <button onClick={() => input(6)} className="text-3xl bg-cyan-100 p-2 rounded-lg hover:bg-cyan-300 ease-out duration-200 m-1 basis-full">6</button>
                            <button onClick={() => input('*')} className="text-3xl bg-cyan-100 p-2 rounded-lg hover:bg-cyan-300 ease-out duration-200 m-1 basis-full">*</button>
                        </div>
                        <div className="grid grid-cols-4 pr-2 pl-2">
                            <button onClick={() => input(1)} className="text-3xl bg-cyan-100 p-2 rounded-lg hover:bg-cyan-300 ease-out duration-200 m-1 basis-full">1</button>
                            <button onClick={() => input(2)} className="text-3xl bg-cyan-100 p-2 rounded-lg hover:bg-cyan-300 ease-out duration-200 m-1 basis-full">2</button>
                            <button onClick={() => input(3)} className="text-3xl bg-cyan-100 p-2 rounded-lg hover:bg-cyan-300 ease-out duration-200 m-1 basis-full">3</button>
                            <button onClick={() => input('-')} className="text-3xl bg-cyan-100 p-2 rounded-lg hover:bg-cyan-300 ease-out duration-200 m-1 basis-full">--</button>
                        </div>
                        <div className="grid grid-cols-4 pb-2 pr-2 pl-2">
                            <button onClick={() => input(0)} className="text-3xl bg-cyan-100 p-2 rounded-lg hover:bg-cyan-300 ease-out duration-200 m-1 basis-full">0</button>
                            <button onClick={() => clear()} className="text-3xl bg-cyan-100 p-2 rounded-lg hover:bg-cyan-300 ease-out duration-200 m-1 basis-full">C</button>
                            <button onClick={() => calculate()} className="text-3xl bg-cyan-100 p-2 rounded-lg hover:bg-cyan-300 ease-out duration-200 m-1 basis-full">=</button>
                            <button onClick={() => input('+')} className="text-3xl bg-cyan-100 p-2 rounded-lg hover:bg-cyan-300 ease-out duration-200 m-1 basis-full">+</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}