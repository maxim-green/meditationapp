import Sound from 'react-native-sound';
import bell from '../../assets/bell.mp3';
import {useSelector} from 'react-redux';

Sound.setCategory('Alarm');

class Bell {
  constructor(asset = bell, volume = 0.5) {
    this.asset = asset;
    this.volume = volume;
  }
  play(volume = this.volume) {
    const sound = new Sound(this.asset, error => {
      if (error) {
        console.log(error);
      }
      sound.setVolume(volume);
      sound.play();
    });
    sound.release();
  }
}

export const useBell = () => {
  const volume = useSelector(state => state.settings.settings.volume);
  return new Bell(bell, volume);
};
