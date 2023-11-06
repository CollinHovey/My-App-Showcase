'use client'
import { useState } from "react"
import Nav from "./components/nav"

export default function Home() {
  return (
    <> 
      <Nav />
      <div>
        <h1>Welcome To The Showcase!</h1>
      </div>
      <div>
        <a href="/blackjack">Blackjack</a>
      </div>
    </>
  )
}
