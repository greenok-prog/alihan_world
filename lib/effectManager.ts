// lib/effectManager.ts
class EffectManager {
    private current?: HTMLAudioElement
  
    play(src: string, onEnd?: () => void) {
      this.current?.pause()
  
      const audio = new Audio(src)
      this.current = audio
      audio.play()
  
      audio.onended = () => {
        if (this.current !== audio) return
        this.current = undefined
        onEnd?.()
      }
    }
  
    stop() {
      this.current?.pause()
      this.current = undefined
    }
  }
  
  export const effectManager = new EffectManager()
  