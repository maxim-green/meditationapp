import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


export const BottomNavigation = ({navigation}) => {
  return (
    <View style={styles.bottomNavigation}>
      <Pressable
        style={styles.navigationButton}
        onPress={() => navigation.navigate('Timer')}>
        <Icon name={'timer-outline'} size={30}/>
      </Pressable>
      <Pressable
        style={styles.navigationButton}
        onPress={() => navigation.navigate('History')}>
        <Icon name={'history'} size={30}/>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNavigation: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#333',
  },
  navigationButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigationButtonText: {
    color: 'white',
    fontSize: 18,
  },
});
