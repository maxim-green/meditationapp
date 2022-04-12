import React from 'react';
import {Modal, StyleSheet, View} from 'react-native';
import { useTheme } from "../../styles/theme";

export const CustomModal = ({children}) => {
  const theme = useTheme()
  return (
    <Modal transparent={true}>
      <View style={styles.wrapper}>
        <View style={[styles.modal, theme.modal]}>{children}</View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    margin: 25,
    padding: 25,
    width: '90%',
    alignItems: 'center',
  },
});
