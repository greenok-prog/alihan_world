// lib/bgManager.ts
class BgManager {
    private audio?: HTMLAudioElement
  
    init(audio: HTMLAudioElement) {
      this.audio = audio
    }
  
    play() {
      this.audio?.play()
    }
  
    stop() {
      this.audio?.pause()
    }
  }
  
  export const bgManager = new BgManager()
  