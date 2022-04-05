import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import theme from '../../styles/theme';
import {MoodIcon} from '../_library/MoodIcon';
import {MoonPhaseIcon} from '../_library/MoonPhaseIcon';
import {HistoryItemIcons} from './HistoryItemIcons';
import {HistoryItemInfo} from './HistoryItemInfo';

export const HistoryItem = ({data, onLongPress}) => {
  const {id, mood, date, duration, pausedAt, stoppedAt, text} = data;
  const longPressHandler = () => {
    onLongPress(id);
  };

  return (
    <Pressable style={styles.wrapper} onLongPress={longPressHandler}>
      <HistoryItemInfo
        date={date}
        duration={duration}
        pausedAt={pausedAt}
        stoppedAt={stoppedAt}
        text={text}
      />
      <HistoryItemIcons>
        <MoodIcon mood={mood} />
        <MoonPhaseIcon date={date} />
      </HistoryItemIcons>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: theme.historyItem.borderColor,
    borderRadius: theme.borderRadius,
    alignItems: 'flex-start',
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 20,
    paddingBottom: 20,
  },
  infoItem: {
    flexDirection: 'row',
    marginBottom: 2,
    marginTop: 2,
  },
  infoItemTitle: {
    fontWeight: '700',
    color: theme.app.color,
    maxWidth: 80,
    width: '100%',
  },
  infoItemText: {
    flex: 1,
    color: theme.app.color,
  },
  icons: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
  },
  icon: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
  },
  info: {
    height: '100%',
    flex: 1,
  },
  text: {
    fontSize: 14,
    color: theme.app.color,
  },
});
