import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import { useTheme } from "../../styles/theme";
import {MoodIcon} from '../_library/MoodIcon';
import {MoonPhaseIcon} from '../_library/MoonPhaseIcon';
import {HistoryItemIcons} from './HistoryItemIcons';
import {HistoryItemInfo} from './HistoryItemInfo';

export const HistoryItem = ({data, onLongPress}) => {
  const theme = useTheme()
  const {id, mood, date, duration, pausedAt, stoppedAt, text} = data;
  const longPressHandler = () => {
    onLongPress(id);
  };

  return (
    <Pressable style={[styles.wrapper, theme.historyItem]} onLongPress={longPressHandler}>
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
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    alignItems: 'flex-start',
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 20,
    paddingBottom: 20,
  }
});
