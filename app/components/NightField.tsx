'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import ItemButton from '../components/ItemButton'
import Link from 'next/link'

export default function NightField({selectDay, startBg, stopBg}: {selectDay: () => void, startBg: () => void, stopBg: () => void}) {
  
  const dogAudioRef = useRef<HTMLAudioElement>(null)
  const alisaAudioRef = useRef<HTMLAudioElement>(null)

  const [activeSpeaker, setActiveSpeaker] = useState<null | string>(null)
 

  const [monikActive, setMonikActive] = useState(false)
  const [dogActive, setDogActive] = useState(false)
  const [alisaActive, setAlisaActive] = useState(false)
  

  const computerVideos = [
  'https://www.youtube.com/embed/6G6A3NKrSK8?si=AONrwPWdwpZbxVMV',
  'https://www.youtube.com/embed/OIuIO-X3TkY?si=Ppy3CugvBiop64PJ'
]
  const alisaMusicList = [
    {name:'Gonja - Плющит', src:`/alisa/1.mp3`},
    {name: 'Mayot - PUFF (Губка Боб remix)', src:`/alisa/2.mp3`},
    {name:'Spice Girls - Wannabe', src:'/alisa/3.mp3'},
    {name:'Wham_-_Last_Christmas_(SkySound.cc)', src:'/alisa/4.mp3'},
    {name:'Финес и Ферб   Инопланетное сердце HD', src:'/alisa/5.mp3'},
    {name: 'Челси - Не нужны советы', src:'/alisa/6.mp3'},
    {name: 'чики чики лу', src:'/alisa/7.mp3'}
  ]

  const [currentMusic, setCurrentMusic] = useState<object | null>(null)



  
 

  // Попап монитора
  const startComp = () => {
   stopBg()
    setMonikActive(true)
  }

  const stopMonik = () => {
    setMonikActive(false)
   startBg()
  }

  // Попап собаки
  const startDog = () => {
   stopBg()
    setDogActive(true)
    dogAudioRef.current?.play()
  }

  const stopDog = () => {
    setDogActive(false)
    dogAudioRef.current?.pause()
   startBg()
  }

  const startAlisa = () => {
   stopBg()
    setAlisaActive(true)
    setCurrentMusic(alisaMusicList[0])
    console.log(alisaMusicList[0]);
    
    // Создаём новый аудио и сохраняем
    const audio = new Audio(`${(alisaMusicList[0] as any).src}`)
    alisaAudioRef.current = audio
    audio.play()
  }

  const stopAlisa = () => {
    setAlisaActive(false)
    setCurrentMusic(null)
    
    alisaAudioRef.current?.pause()   // останавливаем текущий аудио
    alisaAudioRef.current = null     // очищаем ссылку
    
   startBg()         // возвращаем фон
  }
  const playAlisa = () => {
    if (!currentMusic) return
  
    alisaAudioRef.current?.play()
  }

  const pauseAlisa = () => {
    alisaAudioRef.current?.pause()
  }
  const nextAlisaMusic = () => {
    if (!currentMusic) return
  
    const currentIndex = alisaMusicList.findIndex(
      music => music.src === (currentMusic as any).src
    )
    const nextIndex = (currentIndex + 1) % alisaMusicList.length
    const nextMusic = alisaMusicList[nextIndex]
    
    setCurrentMusic(nextMusic)
  
    // Останавливаем старый аудио
    alisaAudioRef.current?.pause()
    
    // Создаём новый
    const audio = new Audio((nextMusic as any).src)
    alisaAudioRef.current = audio
    audio.play()
  }
  
  // Попап Кришны
  const startKrish = () => {
    setActiveSpeaker('krish')
    stopBg()
    const random = Math.floor(Math.random() * 4) + 1
    const audio = new Audio(`/krish/${random}.mp3`)
    audio.play()
    audio.onended = () => {
        startBg()
        setActiveSpeaker(null)
      }
  }
  

  // Попап Лены
  const startLena= () => {
    setActiveSpeaker('lena')
    stopBg()
    const random = Math.floor(Math.random() * 5) + 1
    const audio = new Audio(`/lena/${random}.mp3`)
    audio.play()
    audio.onended = () => {
        startBg()
        setActiveSpeaker(null)
      }
  }

  const startAlihan = () => {
    setActiveSpeaker('alihan')
   stopBg()
    const random = Math.floor(Math.random() * 2) + 1
    const audio = new Audio(`/alihan/${random}.mp3`)
    audio.play()
    audio.onended = () => {
        startBg()
        setActiveSpeaker(null)
      }
  }
  

  const stopAll = () => {
    setDogActive(false)
    setMonikActive(false)
   startBg()
  }
  
  
 

  return (
    <div className="w-screen h-screen overflow-auto bg-black">
   
  {/* Сцена фиксированного размера */}
  <div className="relative mx-auto" style={{ width: 1500, height: 840 }}>
  <button  onClick={selectDay} className='absolute left-8 w-24 h-24 top-8 z-2'>
    <img src="/sun.png"  alt="Night Mode" className='w-full h-full' />
  </button>
    <img
      src="/bg-night.png"
      alt="Main Image"
      className='mt-6'
      style={{ objectFit: 'cover' }}
    />

    <div className="absolute top-0 left-0 w-full h-full">
      <ItemButton clickHandler={startDog} 
        style={{ top: 330, left: 670 }}>DOG</ItemButton>

      <ItemButton clickHandler={startAlisa} 
        style={{ top: 375, left: 505 }}>ALISA</ItemButton>

      <ItemButton clickHandler={startComp} 
        style={{ top: 260, left: 650 }}>MONIK</ItemButton>

      <ItemButton clickHandler={startKrish} 
        style={{ top: 440, right: 250 }} className='w-22 h-24'>KRISH</ItemButton>

<ItemButton clickHandler={startLena} 
        style={{ top: 440, right: 350 }} className='w-24 h-26'>Lena</ItemButton>

<ItemButton clickHandler={startAlihan} 
        style={{ top: 420, right: 130 }} className='w-26 h-26'>sH</ItemButton>

              {/* Speaking sign */}
  <div>
    {activeSpeaker === 'lena' && <div style={{ top: 320, right: 380 }} className='absolute w-16 z-2'><img src="/speaker.png" alt="" /></div>}
    {activeSpeaker === 'alihan' && <div style={{ top: 300, right: 160 }} className='absolute w-16 z-2'><img src="/speaker.png" alt="" /></div>}
    {activeSpeaker === 'krish' && (<div style={{ top: 350, right: 270 }} className='absolute w-16 z-2'><img src="/speaker.png" alt="" /></div>)}
    
    
  </div>
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


{alisaActive && (
    <div
      onClick={stopAlisa}
      className="absolute top-0 left-0 z-50 w-screen h-screen flex items-center justify-center bg-black/75"
    >
      <div className="h-[600px] w-full relative">
        <div>
          <button
            onClick={(e) => {
              e.stopPropagation()
              nextAlisaMusic()
            }}
            className="absolute top-[415px] cursor-pointer left-[680px] z-10 px-4 py-2 w-24 h-24 bg-transparent text-black rounded"
          >
 
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              playAlisa()
            }}
            className="absolute top-[415px] cursor-pointer left-[478px] z-10  w-[100px] h-[100px] bg-transparent text-black rounded"
          >
           
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              pauseAlisa()
            }}
            className="absolute top-[390px] cursor-pointer left-[320px] z-10  w-[140px] h-[140px] bg-transparent text-black rounded"
          >
            <img src="/alisa/pause.png" className='w-full' alt="" />
          </button>
          <div className="absolute top-24 left-24 z-10 text-[4em] font-bold px-4 py-2 bg-black/50 text-white rounded">
            {(currentMusic as any)?.name}
          </div>
        </div>
        <img
          src="/alisa/1.png"
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
  
  <audio ref={dogAudioRef} src="/buttons/dog-song.mp3" />

</div>

  )
}
