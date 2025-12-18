'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import ItemButton from '../components/ItemButton'
import ImgModal from './ImgModal'
import AlisaModal from './AlisaModal'
type Props = {
    actions:{
        startKrish: () => void,
        startLena: () => void,
        startAlihan: () => void,
        activeSpeaker: null | string,
        comp:{
            start: () => void,
            stop: () => void,
            state: boolean,
            videos: string[]
        },
        balkon:{
            start: () => void,
            stop: () => void,
            state: boolean,
            activeBalkonImage: string
        },
        dog:{
            start: () => void,
            stop: () => void,
            state: boolean
        },
        alisa:{
            start: () => void,
            stop: () => void,
            next: () => void,
            pause: () => void,
            play: () => void,
            currentMusic: null | object,
            state: boolean
            
        },
        guestRoom:{
            start: () => void,
            stop: () => void,
            state: boolean
        },
        bedroom:{
            start: () => void,
            stop: () => void,
            state: boolean
        },
        table:{
            start: () => void,
            stop: () => void,
            state: boolean
        },
        bathroom:{
            start: () => void,
            stop: () => void,
            state: boolean
        },
        toilet:{
            start: () => void,
            stop: () => void,
            state: boolean
        }

    },
    selectNight: () => void
}
export default function DayField({selectNight, actions}: Props) {
  const audioRef = useRef<HTMLAudioElement>(null)
  




  
  return (
    <div className="w-screen h-screen overflow-auto bg-black">
    {/* {!isStart && ( <div className="absolute top-0 left-0 z-4 w-screen h-screen bg-gray-200 flex justify-center items-center"> 
      <button className="w-32 h-32 bg-yellow-500 rounded text-white" onClick={start}>ВХОД </button> 
    </div> )} */}
  {/* Сцена фиксированного размера */}
  <div className="relative mx-auto" style={{ width: 1500, height: 840 }}>
  <button  onClick={selectNight} className='absolute left-8 w-24 h-24 top-8 z-2'>
    <img src="/moon.png"  alt="Night Mode" className='w-full h-full' />
    
  </button>
    <img
      src="/bg-day.webp"
      alt="Main Image"
      className='mt-6'
      style={{ objectFit: 'cover' }}
    />

    <div className="absolute top-0 left-0 w-full h-full">
      <ItemButton clickHandler={actions.dog.start} 
        style={{ top: 390, left: 720 }}>DOG</ItemButton>

      <ItemButton clickHandler={actions.alisa.start} 
        style={{ top: 385, left: 505 }}>ALISA</ItemButton>

<ItemButton clickHandler={actions.toilet.start} className='w-20'
        style={{ top: 380, left: 355 }}>Toilet</ItemButton>

<ItemButton clickHandler={actions.bathroom.start} className='w-38 h-34'
        style={{ top: 445, right: 520 }}>Bathroom</ItemButton>

        
<ItemButton clickHandler={actions.table.start} className='size-[5px]'
        style={{ top: 335, left: 570, width: '20px', height:'15px' }}>f</ItemButton>

<ItemButton clickHandler={actions.guestRoom.start} className='w-48 h-48'
        style={{ bottom:60 , left: 650 }}>Guest</ItemButton>

<ItemButton  clickHandler={actions.bedroom.start} className='w-48 h-48'
        style={{ bottom:60, left: 445 }}>Bedroom</ItemButton>
<ItemButton clickHandler={actions.balkon.start} 
        style={{ top: 215, left: 515 }}>BALKON</ItemButton>

<ItemButton link='https://igroutka.ru/dlya-devochek/uborka/30302-elli-moet-posudu.html' 
        style={{ top: 375, left: 440 }}>Water</ItemButton>

<ItemButton link='https://www.temu.com/' 
        style={{ top: 300, left: 554, width:"20px", height:"20px" }}>TEMU</ItemButton>

      <ItemButton clickHandler={actions.comp.start} 
        style={{ top: 270, left: 650 }}>MONIK</ItemButton>

<ItemButton  link='https://ru.pianoplays.com/'  className='h-16'
        style={{ top: 330, left: 770 }}>PIANO</ItemButton>

      <ItemButton clickHandler={actions.startKrish} 
        style={{ top: 440, right: 250 }} className='w-22 h-24'>KRISH</ItemButton>

        <ItemButton clickHandler={actions.startLena} 
                style={{ top: 440, right: 350 }} className='w-24 h-26'>Lena</ItemButton>

        <ItemButton clickHandler={actions.startAlihan} 
                style={{ top: 420, right: 130 }} className='w-26 h-26'>sH</ItemButton>

        {/* Speaking sign */}
  <div>
    {actions.activeSpeaker === 'lena' && <div style={{ top: 320, right: 380 }} className='absolute w-16 z-2'><img src="/speaker.png" alt="" /></div>}
    {actions.activeSpeaker === 'alihan' && <div style={{ top: 300, right: 160 }} className='absolute w-16 z-2'><img src="/speaker.png" alt="" /></div>}
    {actions.activeSpeaker === 'krish' && (<div style={{ top: 350, right: 270 }} className='absolute w-16 z-2'><img src="/speaker.png" alt="" /></div>)}
    
    
  </div>
    </div>
  </div>

  

  {/* Попап собаки */}
{actions.dog.state && (
    <ImgModal imgSrc="/buttons/dog.png" closeModal={actions.dog.stop}/>
)}

{/* Попап балкон */}
{actions.balkon.state && (
    <ImgModal imgSrc={actions.balkon.activeBalkonImage} closeModal={actions.balkon.stop}/>
)}

{ /* Попап алисы */}
{actions.alisa.state && (
   <AlisaModal next={actions.alisa.next} play={actions.alisa.play} start={actions.alisa.start} pause={actions.alisa.pause} stop={actions.alisa.stop} current={actions.alisa.currentMusic}/>
)}

{actions.guestRoom.state && (
   <ImgModal imgSrc='/guest.webp' closeModal={actions.guestRoom.stop}/>
  )}

{actions.bedroom.state && (
   <ImgModal imgSrc='/bedroom.webp' closeModal={actions.bedroom.stop}/>
  )}

{actions.table.state && (
    <ImgModal imgSrc='/table.webp' closeModal={actions.table.stop}/>
      
)}
{actions.bathroom.state && (
    <ImgModal imgSrc='/bathroom.webp' closeModal={actions.bathroom.stop}/>
)}
{actions.toilet.state && (
    <ImgModal imgSrc='/toilet.webp' closeModal={actions.toilet.stop}/>
)}

{actions.comp.state && (
    <div
      onClick={actions.comp.stop}
      className="absolute top-0 left-0 z-50 w-screen h-screen flex items-center justify-center bg-black/75"
    >
      <div className="h-[600px] w-full flex items-center justify-center">
      <iframe width="1000" height="600" src={actions.comp.videos[Math.floor(Math.random()*actions.comp.videos.length)]} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
      </div>
    </div>
  )}

  {/* Аудио */}
  <audio ref={audioRef} src="/background.mpeg" loop />
  

</div>

  )
}
