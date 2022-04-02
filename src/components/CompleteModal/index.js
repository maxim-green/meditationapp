import React, {useState} from 'react';
import {View, Modal, Text, StyleSheet, TextInput} from 'react-native';
import {Button} from '../_library/Button';
import {MoodSwitch} from './MoodSwitch';
import theme from "../../styles/theme";

export const CompleteModal = ({onDone}) => {
  const [mood, setMood] = useState('neutral');
  const [text, setText] = useState('');

  const donePressHandler = () => {
    if (onDone) {
      onDone(mood, text);
    }
  };

  return (
    <Modal transparent={true}>
      <View style={styles.centered}>
        <View style={styles.modal}>
          <Text style={styles.message}>Meditation completed!</Text>
          <Text style={styles.text}>How are you feeling?</Text>
          <View style={styles.row}>
            <MoodSwitch value={'neutral'} onChange={mood => setMood(mood)} />
          </View>
          <TextInput
            value={text}
            onChangeText={text => setText(text)}
            style={styles.input}
            multiline={true}
            textAlignVertical={'top'}
            numberOfLines={6}
            placeholder={'Any thoughts?'}
            placeholderTextColor={'#ccc'}
          />
          <Button onPress={donePressHandler}>Done</Button>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  modal: {
    width: '90%',
    margin: 25,
    padding: 25,
    backgroundColor: 'white',
    borderRadius: theme.borderRadius,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
  },

  message: {
    fontSize: 18,
    marginBottom: 15,
    fontWeight: 'bold',
    color: '#333',
  },

  text: {
    color: '#999',
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: theme.borderRadius,
    marginBottom: 25,
    width: '100%',
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 16,
    paddingLeft: 16,
    fontSize: 18,
    color: '#333',
  },

  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
    marginTop: 10,
  },
});
