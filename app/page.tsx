"use client"

import { useEffect, useRef, useState } from "react"
import DayField from "./components/DayField"
import NightField from "./components/NightField"
import { bgManager } from "@/lib/bgManager"
import { speechManager } from "@/lib/speechManager"

export default function Home() {
  const [selected, setSelected] = useState<'day' | 'night' | null>('night')
  const [activeSpeaker, setActiveSpeaker] = useState<null | string>(null)
  const [monikActive, setMonikActive] = useState(false)
  const [isStart, setIsStart] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)
  const dogAudioRef = useRef<HTMLAudioElement>(null)
  const alisaAudioRef = useRef<HTMLAudioElement>(null)
  const [currentMusic, setCurrentMusic] = useState<object | null>(null)
  const [guestActive, setGuestActive] = useState(false)
  const [bedroomActive, setBedroomActive] = useState(false)

  const [dogActive, setDogActive] = useState(false)
  const [alisaActive, setAlisaActive] = useState(false)
  const [balkonActive, setBalkonActive] = useState(false)
  const [activeBalkonImage, setActiveBalkonImage] = useState("/balkon/1.webp")
  const [activeToilet, setActiveToilet] = useState(false)
  const [activeBathroom, setActiveBathroom] = useState(false)
  const [activeTable, setActiveTable] = useState(false)


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
    let currentSpeechId = 0
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
  // Попап Кришны
  const startKrish = () => {
    setActiveSpeaker("krish")
    bgManager.stop()
  
    const random = Math.floor(Math.random() * 4) + 1
    speechManager.play(`/krish/${random}.mp3`, () => {
      setActiveSpeaker(null)
      bgManager.play()
    })
  }
  
  

  // Попап Лены
  const startLena = () => {
    setActiveSpeaker("lena")
    bgManager.stop()
  
    const random = Math.floor(Math.random() * 5) + 1
    speechManager.play(`/lena/${random}.mp3`, () => {
      setActiveSpeaker(null)
      bgManager.play()
    })
  }
  

  const startAlihan = () => {
    setActiveSpeaker("alihan")
    bgManager.stop()
  
    const random = Math.floor(Math.random() * 2) + 1
    speechManager.play(`/alihan/${random}.mp3`, () => {
      setActiveSpeaker(null)
      bgManager.play()
    })
  }
  // Попап монитора
  const startComp = () => {
    stopBg()
     setMonikActive(true)
   }
 
   const stopMonik = () => {
     setMonikActive(false)
    startBg()
   }

   const startBalkon = () => {
    setActiveBalkonImage(`/balkon/${Math.floor(Math.random()*6)+1}.webp`)
    setBalkonActive(true)
    stopBg()
     const audio = new Audio(`/dota.mp3`)
     audio.play()
     audio.onended = () => {
          startBg()
        }
  }
  const stopBalkon = () => {
    setActiveBalkonImage("")
    setBalkonActive(false)
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
   const startGuest = () => {
    stopBg()
    setGuestActive(true)
    const audio = new Audio(`/room.mp3`)
    audio.play()
    audio.onended = () => {
        startBg()
      }

  }
   const stopGuest = () => {
    setGuestActive(false)
    startBg()
  }

  const startBedroom = () => {
    stopBg()
    setBedroomActive(true)
    const audio = new Audio(`/room.mp3`)
    audio.play()
    audio.onended = () => {
        startBg()
      }

  }
  const stopBedroom = () => {
    setBedroomActive(false)
    startBg()
  }

  const startToilet = () => {
    setActiveToilet(true)
  }
  const stopToilet = () => {
    setActiveToilet(false)
  }
  const startBathroom = () => {
    setActiveBathroom(true)
  }
  const stopBathroom = () => {
    setActiveBathroom(false)
  }
  const startTable = () => {
    setActiveTable(true)
  }
  const stopTable = () => {
    setActiveTable(false)
  }
   
  useEffect(() => {
    if (audioRef.current) {
      bgManager.init(audioRef.current)
    }
  }, [])
  
  return (
    <div>
       {/* {!isStart && ( <div className="absolute top-0 left-0 z-4 w-screen h-screen bg-gray-200 flex justify-center items-center"> 
          <button className="w-32 h-32 bg-yellow-500 rounded text-white" onClick={start}>ВХОД </button> 
        </div> )} */}
      {selected === 'day' ? 
      <DayField actions={{
        comp:{
          start:startComp,
          stop:stopMonik,
          state:monikActive,
          videos:computerVideos
        },
        balkon:{
          start:startBalkon,
          stop:stopBalkon,
          state:balkonActive,
          activeBalkonImage:activeBalkonImage
        },
        dog:{
          start:startDog,
          stop:stopDog,
          state:dogActive
        },
        alisa:{
          start:startAlisa,
          stop:stopAlisa,
          next:nextAlisaMusic,
          pause:pauseAlisa,
          play:playAlisa,
          currentMusic:currentMusic,
          state:alisaActive
        },
        bedroom:{
          start: startBedroom,
          stop: stopBedroom,
          state: bedroomActive
        },
        guestRoom:{
          start: startGuest,
          stop: stopGuest,
          state: guestActive
        },
        toilet:{
          start: startToilet,
          stop: stopToilet,
          state: activeToilet
        },
        table:{
          start: startTable,
          stop: stopTable,
          state: activeTable
        },
        bathroom:{
          start: startBathroom,
          stop: stopBathroom,
          state: activeBathroom
        },
        startKrish,
        startLena,
        startAlihan,
        activeSpeaker
      }} selectNight={selectNight}/> 
      
      : <NightField selectDay={selectDay} actions={{
        comp:{
          start:startComp,
          stop:stopMonik,
          state:monikActive,
          videos:computerVideos
        },
        balkon:{
          start:startBalkon,
          stop:stopBalkon,
          state:balkonActive,
          activeBalkonImage:activeBalkonImage
        },
        dog:{
          start:startDog,
          stop:stopDog,
          state:dogActive
        },
        alisa:{
          start:startAlisa,
          stop:stopAlisa,
          next:nextAlisaMusic,
          pause:pauseAlisa,
          play:playAlisa,
          currentMusic:currentMusic,
          state:alisaActive
        },
        bedroom:{
          start: startBedroom,
          stop: stopBedroom,
          state: bedroomActive
        },
        guestRoom:{
          start: startGuest,
          stop: stopGuest,
          state: guestActive
        },
        toilet:{
          start: startToilet,
          stop: stopToilet,
          state: activeToilet
        },
        table:{
          start: startTable,
          stop: stopTable,
          state: activeTable
        },
        bathroom:{
          start: startBathroom,
          stop: stopBathroom,
          state: activeBathroom
        },
        startKrish,
        startLena,
        startAlihan,
        activeSpeaker
      }}/>}

      
 
      <audio ref={audioRef} src="/background.mpeg" loop />
      <audio ref={dogAudioRef} src="/buttons/dog-song.mp3" />
    </div>
  )
}