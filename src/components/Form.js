import React, { useState } from "react";
import memesData from "../memesData";

export default function Form() {
  const [memeImage, setMemeImage] = useState("");

  function getMeme() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url);
  }

  return (
    <main>
      <div className="flex flex-col gap-4 justify-center items-center py-9">
        <form className="flex flex-col gap-4 w-5/6">
          <div className="flex gap-4">
            <input
              className="border border-gray-300 rounded font-karla text-black font-normal py-3 pl-3 w-56"
              type="text"
              placeholder="Shut up"
            />
            <input
              className="border border-gray-300 rounded font-karla text-black font-normal py-3 pl-3 w-56"
              type="text"
              placeholder="and take my money"
            />
          </div>
          <button
            className="bg-gradient-to-r from-purple-900	to-purple-500 rounded font-karla font-bold text-base tracking-tighter text-white py-3 px-32"
            onClick={getMeme}
          >
            Get a new meme image 🖼
          </button>
        </form>
      </div>
      <div className="flex justify-center rounded-sm">
        <img src={memeImage} alt="meme" />
      </div>
    </main>
  );
}
