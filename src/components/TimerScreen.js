import React from 'react';
import {Timer} from './Timer';
import ScreenLayout from './ScreenLayout';
import {useDispatch, useSelector} from 'react-redux';
import {addMeditation} from '../redux/history/history.thunk';
import {setSettings} from '../redux/settings/settings.thunk';

export function TimerScreen({navigation}) {
  const dispatch = useDispatch();
  const duration = useSelector(state => state.settings.settings.duration);
  const volume = useSelector(state => state.settings.settings.volume);

  const onMeditationDone = async data => {
    dispatch(addMeditation(data));
    dispatch(setSettings({duration: data.duration}));
  };

  return (
    <ScreenLayout title={'Timer'} navigation={navigation}>
      {duration && (
        <Timer time={duration / 60} volume={volume} onDone={onMeditationDone} />
      )}
    </ScreenLayout>
  );
}
