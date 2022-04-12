import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from "../../styles/theme";
import {useRoute} from '@react-navigation/native';

// todo decompose
export const BottomNavigation = ({navigation}) => {
  const theme = useTheme();
  const route = useRoute();
  return (
    <View style={[styles.bottomNavigation, theme.bottomNavigation]}>
      <Pressable
        style={[styles.navigationButton, route.name === 'Timer' && styles.navigationButtonActive]}
        onPress={() => navigation.navigate('Timer')}>
        <MaterialCommunityIcon
          name={'timer-outline'}
          size={route.name === 'Timer' ? 30 : 25}
          color={theme.bottomNavigation.color}
        />
      </Pressable>
      <Pressable
        style={[styles.navigationButton, route.name === 'History' && styles.navigationButtonActive]}
        onPress={() => navigation.navigate('History')}>
        <MaterialCommunityIcon
          name={'history'}
          size={route.name === 'History'? 30 : 25}
          color={theme.bottomNavigation.color}
        />
      </Pressable>
      <Pressable
        style={[styles.navigationButton, route.name === 'Settings' && styles.navigationButtonActive]}
        onPress={() => navigation.navigate('Settings')}>
        <MaterialIcon
          name={'settings'}
          size={route.name === 'Settings' ? 30 : 25}
          color={theme.bottomNavigation.color}
        />
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
  },
  navigationButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.5,
  },
  navigationButtonActive: {
    opacity: 1,
  },
  navigationButtonText: {
    color: 'white',
    fontSize: 18,
  },
});
