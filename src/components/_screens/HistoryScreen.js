import React, {useEffect} from 'react';
import ScreenLayout from '../_layout/ScreenLayout';
import {useDispatch, useSelector} from 'react-redux';
import {
  deleteMeditation,
  fetchMeditations,
} from '../../redux/history/history.thunk';
import {History} from '../History';

export const HistoryScreen = ({navigation}) => {
  const meditations = useSelector(state => state.history.meditations);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMeditations());
  }, [dispatch]);

  const handleMeditationLongPress = async id => {
    dispatch(deleteMeditation(id));
  };

  return (
    <ScreenLayout title={'History'} navigation={navigation}>
      <History
        meditations={meditations}
        onItemLongPress={handleMeditationLongPress}
      />
    </ScreenLayout>
  );
};
