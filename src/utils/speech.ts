/**
 * Web Speech API utility to read food stories aloud for 3rd graders
 */
class SpeechManager {
  private synth: SpeechSynthesis | null = null;
  private isSpeaking: boolean = false;
  private onStateChangeCallbacks: Set<(speaking: boolean) => void> = new Set();

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
    }
  }

  public isSupported(): boolean {
    return this.synth !== null;
  }

  public getIsSpeaking(): boolean {
    return this.isSpeaking;
  }

  public subscribe(cb: (speaking: boolean) => void): () => void {
    this.onStateChangeCallbacks.add(cb);
    return () => this.onStateChangeCallbacks.delete(cb);
  }

  private notify(speaking: boolean) {
    this.isSpeaking = speaking;
    this.onStateChangeCallbacks.forEach((cb) => cb(speaking));
  }

  public stop() {
    if (!this.synth) return;
    try {
      this.synth.cancel();
      this.notify(false);
    } catch {
      // ignore
    }
  }

  public speak(text: string, onEnd?: () => void) {
    if (!this.synth) return;

    this.stop();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ko-KR';
    utterance.rate = 0.92; // slightly gentle pace for 3rd graders
    utterance.pitch = 1.05; // warm, clear tone

    utterance.onstart = () => {
      this.notify(true);
    };

    utterance.onend = () => {
      this.notify(false);
      onEnd?.();
    };

    utterance.onerror = () => {
      this.notify(false);
    };

    try {
      this.synth.speak(utterance);
    } catch {
      this.notify(false);
    }
  }
}

export const speechManager = new SpeechManager();
