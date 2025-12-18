import { FC } from "react";

type Props = {
    stop: () => void,
    start: () => void,
    play: () => void,
    pause: () => void,
    next: () => void,
    current: null | object,
}

const AlisaModal:FC<Props> = ({start, stop, next, pause, play, current}) => {
    return (
        <div
        onClick={stop}
        className="absolute top-0 left-0 z-50 w-screen h-screen flex items-center justify-center bg-black/75"
      >
        <div className="h-[600px] w-full relative">
          <div>
            <button
              onClick={(e) => {
                e.stopPropagation()
                next()
              }}
              className="absolute top-[415px] cursor-pointer left-[680px] z-10 px-4 py-2 w-24 h-24 bg-transparent text-black rounded"
            >
   
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
               play()
              }}
              className="absolute top-[415px] cursor-pointer left-[478px] z-10  w-[100px] h-[100px] bg-transparent text-black rounded"
            >
             
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                pause()
              }}
              className="absolute top-[390px] cursor-pointer left-[320px] z-10  w-[140px] h-[140px] bg-transparent text-black rounded"
            >
              <img src="/alisa/pause.png" className='w-full' alt="" />
            </button>
            <div className="absolute top-24 left-24 z-10 text-[4em] font-bold px-4 py-2 bg-black/50 text-white rounded">
              {(current as any)?.name}
            </div>
          </div>
          <img
            src="/alisa/1.png"
            className="h-full w-full object-contain"
            alt=""
          />
        </div>
      </div>
    )
}

export default AlisaModal;