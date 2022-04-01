import React from 'react';
import { View, Text, StyleSheet, Pressable } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'

export const Navbar = ({title, navigation}) => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.title}>{title}</Text>
      <Pressable
        style={styles.navigationButton}
        onPress={() => navigation.navigate('Settings')}>
        <Icon name={'settings'} size={24} color={'#fff'}/>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 85,
    paddingTop: 35,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'dodgerblue',
  },
  navigationButton: {

  },
  title: {
    color: '#ffffff',
    fontSize: 20,
    // letterSpacing: 1,
  },
});
