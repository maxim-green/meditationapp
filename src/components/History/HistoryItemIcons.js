import {StyleSheet, View} from 'react-native';
import React from 'react';


export const HistoryItemIcons = ({children}) => {
  return (
    <View style={styles.icons}>
      {React.Children.map(children, child => (
        <View style={styles.icon}>{child}</View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
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
});
