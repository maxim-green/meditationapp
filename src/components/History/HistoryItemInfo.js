import {getFormattedDate, getFormattedTime} from '../../utils/functions';
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import theme from '../../styles/theme';

export const InfoItem = ({title, children}) => {
  return (
    <View style={styles.infoItem}>
      <Text style={styles.infoItemTitle}>{title}</Text>
      <Text style={styles.infoItemText}>{children}</Text>
    </View>
  );
};

export const HistoryItemInfo = ({date, duration, pausedAt, stoppedAt, text}) => {
  return (
    <View style={styles.info}>
      <InfoItem title={'Date:'}>{getFormattedDate(new Date(date))}</InfoItem>
      <InfoItem title={'Duration:'}>
        {Math.round(duration / 60)} minute{duration > 60 && 's'}
      </InfoItem>
      {!!pausedAt.length && (
        <InfoItem title={'Paused:'}>
          {pausedAt.length} times (at{' '}
          {pausedAt.map(seconds => getFormattedTime(seconds)).join(', ')})
        </InfoItem>
      )}
      {!!stoppedAt && (
        <InfoItem title={'Completed:'}>
          prematurely on {getFormattedTime(stoppedAt)}
        </InfoItem>
      )}
      {!stoppedAt && <InfoItem title={'Completed:'}>fully</InfoItem>}
      {!!text && <InfoItem title={'Note:'}>{text}</InfoItem>}
    </View>
  );
};



const styles = StyleSheet.create({
  info: {
    height: '100%',
    flex: 1,
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
})
