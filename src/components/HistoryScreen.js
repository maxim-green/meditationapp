import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import ScreenLayout from './ScreenLayout';
import {HistoryItem} from './HistoryItem';
import {meditationsStorage} from '../utils/storage';

export const HistoryScreen = ({navigation}) => {
  const getMeditations = async () => {
    const meditations = await meditationsStorage.get();
    setMeditations(meditations.slice().reverse());
  };

  // todo: add delete item functionality
  const [meditations, setMeditations] = useState();
  useEffect(() => {
    getMeditations();
  }, []);

  const deleteMeditation = async (id) => {
    meditationsStorage.delete(id)
    setMeditations(prev => prev.filter(meditation => meditation.id !== id))
  }

  return (
    <ScreenLayout title={'History'} navigation={navigation}>
      <FlatList
        style={styles.list}
        data={meditations}
        keyExtractor={meditation => meditation.id}
        renderItem={({item}) => <HistoryItem data={item} onLongPress={deleteMeditation}/>}
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
