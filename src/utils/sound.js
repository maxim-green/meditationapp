import Sound from 'react-native-sound';

Sound.setCategory("Alarm")

export const playSound = (asset, volume) => {
  const sound = new Sound(asset, error => {
    if (error) {
      console.log(error);
    }
    sound.setVolume(volume)
    sound.play()
  });
  sound.release()
}
