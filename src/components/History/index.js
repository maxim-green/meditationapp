import {HistoryItem} from './HistoryItem';
import {FlatList, StyleSheet} from 'react-native';
import React from 'react';

export const History = ({meditations, onItemLongPress}) => {
  return (
    <FlatList
      style={styles.list}
      contentContainerStyle={styles.contentContainer}
      data={meditations.slice().reverse()}
      keyExtractor={meditation => meditation.id}
      renderItem={({item}) => (
        <HistoryItem data={item} onLongPress={onItemLongPress} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    width: '100%',
  },
  contentContainer: {
    padding: 20,
  },
});
