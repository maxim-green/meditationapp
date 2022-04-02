import React from 'react';
import {Text, View, StyleSheet, Image, Pressable} from 'react-native';
import bad from '../../../assets/face-bad.png';
import neutral from '../../../assets/face-neutral.png';
import good from '../../../assets/face-good.png';
import {getFormattedTime} from '../../utils/functions';

export const HistoryItem = ({data, onLongPress}) => {
  const imageSource =
    data.mood === 'bad' ? bad : data.mood === 'good' ? good : neutral;

  const longPressHandler = () => {
    onLongPress(data.id)
  }

  return (
    <Pressable style={styles.wrapper} onLongPress={longPressHandler}>
      <Text style={styles.date}>{data.date}</Text>
      <Image source={imageSource} style={styles.moodImage} />
      <View style={styles.info}>
        <Text style={styles.text}>
          Duration: {Math.round(data.duration / 60)} minutes
        </Text>
        {!!data.text && <Text style={styles.text}>Note: {data.text}</Text>}
        {!!data.pausedAt.length && (
          <Text style={styles.text}>
            Paused {data.pausedAt.length} times (at{' '}
            {data.pausedAt.map(seconds => getFormattedTime(seconds)).join(', ')}
            )
          </Text>
        )}
        {!!data.stoppedAt && (
          <Text style={styles.text}>
            Completed prematurely on {getFormattedTime(data.stoppedAt)}
          </Text>
        )}
        {!data.stoppedAt && <Text style={styles.text}>Completed fully</Text>}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    width: '100%',
    flexDirection: 'row',
    marginBottom: 10,
    padding: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    color: '#333',
    alignItems: 'center',
  },
  moodImage: {
    width: 70,
    height: 70,
  },
  info: {
    paddingLeft: 20,
    height: '100%',
  },
  date: {
    position: 'absolute',
    top: 4,
    left: 8,
    fontSize: 12,
    color: '#999',
  },
  text: {
    color: '#999',
  },
});
