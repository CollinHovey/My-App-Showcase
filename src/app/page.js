'use client'
import { useState } from "react"
import Nav from "./components/nav"

export default function Home() {


  const allApps = [
    {
      name: 'Blackjack',
      link: '/blackjack',
      description: 'Looking at your hand, choose to hit or stand to have a higher core than the house. Be careful though, getting over 21 will make you bust!',
      image: '/images/blackjack.png'
    },
    {
      name: 'Test1',
      link: '/blackjack',
      description: 'This is a test card to see how all the formatting works out. I will try to make it all look very nice',
      image: '/images/blackjack.png'
    },
    {
      name: 'Test1',
      link: '/blackjack',
      description: 'This is a test card to see how all the formatting works out. I will try to make it all look very nice',
      image: '/images/blackjack.png'
    },
    {
      name: 'Test1',
      link: '/blackjack',
      description: 'This is a test card to see how all the formatting works out. I will try to make it all look very nice',
      image: '/images/blackjack.png'
    },
    {
      name: 'Test1',
      link: '/blackjack',
      description: 'This is a test card to see how all the formatting works out. I will try to make it all look very nice',
      image: '/images/blackjack.png'
    }
  ]

  let allAppsDisplay = allApps.map((app, index) => {

    return(
      <li className="py-4" key={index}>
        <div>
            <div className="col-span-1 flex flex-col divide-y rounded-lg bg-white text-center shadow">
            <div className="flex flex-1 flex-col p-8">
              <img className="mx-auto h-32 w-32 flex-shrink-0 rounded-full" src={app.image} alt=""></img>
              <h3 className="mt-6 text-sm font-medium text-gray-900">{app.name}</h3>
              <dl className="mt-1 flex flex-grow flex-col justify-between">
                <dt className="sr-only">Description</dt>
                <dd className="text-sm text-gray-500">{app.description}</dd>
                <dt className="sr-only">Player Count</dt>
                <dd className="mt-3">
                  <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">1 Player</span>
                </dd>
              </dl>
            </div>
            <div>
              <div className="-mt-px flex divide-x hover:bg-gray-200 hover:rounded-bl-lg hover:rounded-br-lg ease-out duration-300">
                <div className="flex w-0 flex-1">
                  <a href={app.link} className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
                  <svg className="h-6 w-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                  </svg>
                    Play
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    )
  })



  return (
    <> 
      <Nav />
      <div className="flex justify-center text-2xl mt-2">
        <h1 className="">Welcome To The Showcase!</h1>
      </div>
      <div className="flex mx-10 mt-2">
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {allAppsDisplay}
        </ul>
      </div>
    </>
  )
}
