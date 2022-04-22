import React from "react";
import MemePng from '../images/memeimg.png';

export default function Meme() {
  return (
    <div className="flex justify-center rounded-sm">
      <img src={ MemePng } />
    </div>
  )
}