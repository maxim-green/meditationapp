import Sound from 'react-native-sound';
import {useSelector} from 'react-redux';

Sound.setCategory('Alarm');

class Bell {
  constructor(asset = 'bell.mp3', volume = 0.5) {
    this.asset = asset;
    this.volume = volume;
  }
  play(volume = this.volume) {
    const sound = new Sound(this.asset, Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log(error);
      }
      sound.setVolume(volume);
      sound.play();
    });
    sound.release();
  }
}

export default new Bell()

export const useBell = () => {
  const volume = useSelector(state => state.app.settings.volume);
  return new Bell('bell.mp3', volume);
};
