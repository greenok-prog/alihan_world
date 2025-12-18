// lib/speechManager.ts
class SpeechManager {
    private current?: HTMLAudioElement
  
    play(src: string, onEnd: () => void) {
      // 🔥 останавливаем предыдущего
      this.current?.pause()
  
      const audio = new Audio(src)
      this.current = audio
  
      audio.play()
  
      audio.onended = () => {
        if (this.current !== audio) return
        this.current = undefined
        onEnd()
      }
    }
  
    stop() {
      this.current?.pause()
      this.current = undefined
    }
  }
  
  export const speechManager = new SpeechManager()
  