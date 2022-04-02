import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

export const BottomNavigation = ({navigation}) => {
  return (
    <View style={styles.bottomNavigation}>
      <Pressable
        style={styles.navigationButton}
        onPress={() => navigation.navigate('Timer')}>
        <MaterialCommunityIcon name={'timer-outline'} size={30}/>
      </Pressable>
      <Pressable
        style={styles.navigationButton}
        onPress={() => navigation.navigate('History')}>
        <MaterialCommunityIcon name={'history'} size={30}/>
      </Pressable>
      <Pressable
        style={styles.navigationButton}
        onPress={() => navigation.navigate('Settings')}>
        <MaterialIcon name={'settings'} size={30}/>
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
