import React from 'react';
import {Timer} from '../Timer/Timer';
import ScreenLayout from '../_layout/ScreenLayout';
import {useDispatch, useSelector} from 'react-redux';
import {addMeditation} from '../../redux/history/history.thunk';
import {setSettings} from '../../redux/settings/settings.thunk';

export function TimerScreen({navigation}) {
  const dispatch = useDispatch();
  const duration = useSelector(state => state.settings.settings.duration);
  const volume = useSelector(state => state.settings.settings.volume);

  const endHandler = data => {
    dispatch(addMeditation(data));
    dispatch(setSettings({duration: data.duration}));
  };

  return (
    <ScreenLayout title={'Timer'} navigation={navigation}>
        <Timer time={duration} volume={volume} onEnd={endHandler} />
    </ScreenLayout>
  );
}
