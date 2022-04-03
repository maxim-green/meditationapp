import React from 'react';
import {Text, View, StyleSheet, Image, Pressable} from 'react-native';
import bad from '../../../assets/face-bad.png';
import neutral from '../../../assets/face-neutral.png';
import good from '../../../assets/face-good.png';
import {
  getFormattedDate,
  getFormattedTime,
  getMoonPhase,
} from '../../utils/functions';
import theme from '../../styles/theme';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export const HistoryItem = ({data, onLongPress}) => {
  const longPressHandler = () => {
    onLongPress(data.id);
  };

  return (
    <Pressable style={styles.wrapper} onLongPress={longPressHandler}>
      <MoodIcon mood={data.mood} />
      <MoonPhase date={data.date} />
      <View style={styles.info}>
        <Text style={styles.text}>{getFormattedDate(new Date(data.date))}</Text>
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

export const MoodIcon = ({mood, size = 20, color = theme.moodIcon.color}) => {
  return (
    <View>
      {mood === 'bad' && (
        <EntypoIcon name={'emoji-sad'} size={20} color={theme.moodIcon.color} />
      )}
      {mood === 'neutral' && (
        <EntypoIcon
          name={'emoji-neutral'}
          size={20}
          color={theme.moodIcon.color}
        />
      )}
      {mood === 'good' && (
        <EntypoIcon
          name={'emoji-happy'}
          size={20}
          color={theme.moodIcon.color}
        />
      )}
    </View>
  );
};

export const MoonPhase = ({date}) => {
  const phase = getMoonPhase(date);
  return (
    <View>
      {phase === 'New' && (
        <MaterialCommunityIcon
          name={'moon-new'}
          size={20}
          color={theme.moonIcon.color}
        />
      )}
      {phase === 'Waxing Crescent' && (
        <MaterialCommunityIcon
          name={'moon-waxing-crescent'}
          size={20}
          color={theme.moonIcon.color}
        />
      )}
      {phase === 'First Quarter' && (
        <MaterialCommunityIcon
          name={'moon-first-quarter'}
          size={20}
          color={theme.moonIcon.color}
        />
      )}
      {phase === 'Waxing Gibbous' && (
        <MaterialCommunityIcon
          name={'moon-waxing-gibbous'}
          size={20}
          color={theme.moonIcon.color}
        />
      )}
      {phase === 'Full' && (
        <MaterialCommunityIcon
          name={'moon-full'}
          size={20}
          color={theme.moonIcon.color}
        />
      )}
      {phase === 'Waning Gibbous' && (
        <MaterialCommunityIcon
          name={'moon-waning-gibbous'}
          size={20}
          color={theme.moonIcon.color}
        />
      )}
      {phase === 'Last Quarter' && (
        <MaterialCommunityIcon
          name={'moon-last-quarter'}
          size={20}
          color={theme.moonIcon.color}
        />
      )}
      {phase === 'Waning Crescent' && (
        <MaterialCommunityIcon
          name={'moon-waning-crescent'}
          size={20}
          color={theme.moonIcon.color}
        />
      )}
      <Text style={styles.text}>{phase}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    flex: 1,
    marginBottom: 10,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 25,
    paddingRight: 25,
    borderWidth: 1,
    borderColor: theme.historyItem.borderColor,
    borderRadius: theme.borderRadius,
    alignItems: 'flex-start',
  },
  moodImage: {
    width: 50,
    height: 50,
  },
  info: {
    height: '100%',
  },
  text: {
    fontSize: 14,
    color: theme.app.color,
  },
});
