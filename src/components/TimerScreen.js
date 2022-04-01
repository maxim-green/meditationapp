import React, {useEffect, useState} from 'react';
import {Timer} from './Timer';
import ScreenLayout from './ScreenLayout';
import {meditationsStorage, settingsStorage} from '../utils/storage';

export function TimerScreen({navigation}) {
  const [meditationDuration, setMeditationDuration] = useState();
  const [volume, setVolume] = useState()

  const getDefaultMeditationDuration = async () => {
    setMeditationDuration(await settingsStorage.getDefaultDuration());
  };
  const getVolume = async () => {
    setVolume(await settingsStorage.getVolume());
  };

  const onMedidationDone = async data => {
    await meditationsStorage.add(data);
    await settingsStorage.setDefaultDuration(data.duration);
  };

  useEffect(() => {
    getDefaultMeditationDuration();
    getVolume()
  }, []);

  return (
    <ScreenLayout title={'Timer'} navigation={navigation}>
      {meditationDuration && (
        <Timer time={meditationDuration / 60} volume={volume} onDone={onMedidationDone} />
      )}
    </ScreenLayout>
  );
}
