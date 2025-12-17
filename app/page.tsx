"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isStart, setIsStart] = useState(false)

  const start = () => {
    audioRef.current?.play()
    setIsStart(true)
  }
  return (
   <div className="h-full w-full">
      {!isStart && (
        <div className="w-screen h-screen bg-gray-200 flex justify-center items-center">
        <button className="w-32 h-32 bg-yellow-500 rounded text-white" onClick={start}>ВХОД</button>
      </div>
      )}
       <audio
        ref={audioRef}
        src="/background.mpeg"
        loop
      />
   </div>
  );
}
