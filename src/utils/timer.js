import BackgroundTimer from "react-native-background-timer";
import { differenceInSeconds } from "./functions";

class Timer {
  _startCountdown() {
    if (!this.interval) {
      this.startTime = Date.now();
      this.interval = BackgroundTimer.setInterval(() => {
        console.log(this.timeLeft)
        this.onTick(this.timeLeft)
        this.timeLeft =
          this.duration - differenceInSeconds(this.startTime, Date.now());

        if (this.timeLeft <= 0) this._complete()
      }, 1000);
    }
  }

  _stopCountdown() {
    if (this.interval) {
      BackgroundTimer.clearInterval(this.interval);
      this.interval = null;
    }
  }

  _complete() {
    this._stopCountdown()
    this.duration = this.initialDuration;
    this.onComplete();
  }

  constructor(duration = 1800) {
    this.interval = null;
    this.startTime = null;
    this.duration = duration;
    this.timeLeft = null;
    this.onComplete = null;
    this.onTick = null;
  }

  setDuration(duration) {
    this.initialDuration = duration
    this.duration = duration
  }

  start(onTick, onComplete) {
    this.timeLeft = this.duration
    this.onComplete = onComplete
    this.onTick = onTick
    this._startCountdown()
  }

  pause() {
    this.duration = this.timeLeft;
    this._stopCountdown()
  }

  resume() {
    this._startCountdown()
  }

  stop() {
    this._complete();
    return this.timeLeft;
  }
}

export default new Timer();
