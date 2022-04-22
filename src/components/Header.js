import React from "react";
import TrollFace from "../images/Troll Face.png"

export default function Header() {
  return(
    <header className="flex items-center justify-between bg-gradient-to-r from-purple-900	to-purple-500 h-16 text-white px-5">
      <div className="flex gap-2">
        <img className='h-6 w-8' src={ TrollFace } />
        <h1 className="text-lg font-bold tracking-tighter">Meme Generator</h1>
      </div>
      <h4 className="text-xs font-medium">React Course - Project 3</h4>
    </header>
  )
}

