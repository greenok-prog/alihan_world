"use client"

import { useRef, useState } from "react"
import DayField from "./components/DayField"
import NightField from "./components/NightField"

export default function Home() {
  const [selected, setSelected] = useState<'day' | 'night' | null>('night')
  const [isStart, setIsStart] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const start = () => {
    setIsStart(true)
   startBg()
  }
  const selectDay = () => {
    setSelected('day')
  }
  const selectNight = () => {
    setSelected('night')
  }
  const startBg = () => {
    audioRef.current?.play()
  }
  const stopBg = () => {
    audioRef.current?.pause()
  }
  return (
    <div>
       {!isStart && ( <div className="absolute top-0 left-0 z-4 w-screen h-screen bg-gray-200 flex justify-center items-center"> 
          <button className="w-32 h-32 bg-yellow-500 rounded text-white" onClick={start}>ВХОД </button> 
        </div> )}
      {selected === 'day' ? <DayField selectNight={selectNight} startBg={startBg} stopBg={stopBg}/> : <NightField selectDay={selectDay} startBg={startBg} stopBg={stopBg}/>}
 
      <audio ref={audioRef} src="/background.mpeg" loop />
    </div>
  )
}