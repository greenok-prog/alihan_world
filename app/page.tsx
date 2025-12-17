'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import ItemButton from './components/ItemButton'

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const dogAudioRef = useRef<HTMLAudioElement>(null)


  const [isStart, setIsStart] = useState(false)

  const [monikActive, setMonikActive] = useState(false)
  const [dogActive, setDogActive] = useState(false)

  const computerVideos = [
  'https://www.youtube.com/embed/6G6A3NKrSK8?si=AONrwPWdwpZbxVMV',
  'https://www.youtube.com/embed/OIuIO-X3TkY?si=Ppy3CugvBiop64PJ']


  const start = () => {
    setIsStart(true)
    audioRef.current?.play()
  }
 

  // Попап монитора
  const startComp = () => {
    audioRef.current?.pause()
    setMonikActive(true)
  }

  const stopMonik = () => {
    setMonikActive(false)
    audioRef.current?.play()
  }

  // Попап собаки
  const startDog = () => {
    audioRef.current?.pause()
    setDogActive(true)
    dogAudioRef.current?.play()
  }

  const stopDog = () => {
    setDogActive(false)
    dogAudioRef.current?.pause()
    audioRef.current?.play()
  }
  
  // Попап Кришны
  const startKrish = () => {
    audioRef.current?.pause()
    const random = Math.floor(Math.random() * 4) + 1
    const audio = new Audio(`/krish/${random}.mp3`)
    audio.play()
    setTimeout(() => {
      audio.pause()
      audioRef.current?.play()
    }, 6000)
  }
  

  // Попап Лены
  const startLena= () => {
    audioRef.current?.pause()
    const random = Math.floor(Math.random() * 5) + 1
    const audio = new Audio(`/lena/${random}.mp3`)
    audio.play()
    setTimeout(() => {
      audio.pause()
      audioRef.current?.play()
    }, 6000)
  }

  const stopAll = () => {
    setDogActive(false)
    setMonikActive(false)
    audioRef.current?.play()
  }
  
  
 

  return (
    <div className="w-screen h-screen overflow-auto bg-black">
    {/* {!isStart && ( <div className="absolute top-0 left-0 z-4 w-screen h-screen bg-gray-200 flex justify-center items-center"> 
      <button className="w-32 h-32 bg-yellow-500 rounded text-white" onClick={start}>ВХОД </button> 
    </div> )} */}
  {/* Сцена фиксированного размера */}
  <div className="relative mx-auto" style={{ width: 1500, height: 840 }}>
    <img
      src="/bg-night.png"
      alt="Main Image"
      className='mt-6'
      style={{ objectFit: 'cover' }}
    />

    <div className="absolute top-0 left-0 w-full h-full">
      <ItemButton clickHandler={startDog} 
        style={{ top: 330, left: 670 }}>DOG</ItemButton>

      <ItemButton clickHandler={startDog} 
        style={{ top: 375, left: 505 }}>ALISA</ItemButton>

      <ItemButton clickHandler={startComp} 
        style={{ top: 260, left: 650 }}>MONIK</ItemButton>

      <ItemButton clickHandler={startKrish} 
        style={{ top: 440, right: 250 }} className='w-22 h-24'>KRISH</ItemButton>

<ItemButton clickHandler={startLena} 
        style={{ top: 440, right: 350 }} className='w-24 h-26'>Lena</ItemButton>
    </div>
  </div>

  {/* Попап собаки */}
  {dogActive && (
    <div
      onClick={stopDog}
      className="absolute top-0 left-0 z-50 w-screen h-screen flex items-center justify-center bg-black/75"
    >
      <div className="h-[600px] w-full">
        <img
          src="/buttons/dog.png"
          className="h-full w-full object-contain"
          alt=""
        />
      </div>
    </div>
  )}

{monikActive && (
    <div
      onClick={stopMonik}
      className="absolute top-0 left-0 z-50 w-screen h-screen flex items-center justify-center bg-black/75"
    >
      <div className="h-[600px] w-full flex items-center justify-center">
      <iframe width="1000" height="600" src={computerVideos[Math.floor(Math.random()*computerVideos.length)]} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
      </div>
    </div>
  )}

  {/* Аудио */}
  <audio ref={audioRef} src="/background.mpeg" loop />
  <audio ref={dogAudioRef} src="/buttons/dog-song.mp3" />

</div>

  )
}
