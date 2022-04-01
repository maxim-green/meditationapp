import React, {useEffect} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import ScreenLayout from './ScreenLayout';
import {HistoryItem} from './HistoryItem';
import {useDispatch, useSelector} from 'react-redux';
import {
  deleteMeditation,
  fetchMeditations,
} from '../redux/history/history.thunk';

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
      <FlatList
        style={styles.list}
        data={meditations.slice().reverse()}
        keyExtractor={meditation => meditation.id}
        renderItem={({item}) => (
          <HistoryItem data={item} onLongPress={handleMeditationLongPress} />
        )}
      />
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    width: '100%',
  },
});
