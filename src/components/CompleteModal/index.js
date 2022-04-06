import React, { useState } from "react";
import { View, Modal, Text, StyleSheet, TextInput } from "react-native";
import { Button } from "../_library/Button";
import { MoodPicker } from "./MoodPicker";
import theme from "../../styles/theme";
import { CustomModal } from "../_library/CustomModal";
import { NoteInput } from "./NoteInput";

export const CompleteModal = ({ onDone }) => {
  const [mood, setMood] = useState("neutral");
  const [text, setText] = useState("");

  const donePressHandler = () => {
    if (onDone) {
      onDone(mood, text);
    }
  };

  return (
    <CustomModal>
      <Text style={styles.title}>Meditation completed!</Text>

      <Item caption={'How are you feeling?'}>
        <MoodPicker value={"neutral"} onChange={mood => setMood(mood)} />
      </Item>

      <Item caption={'What are you thinking?'}>
        <NoteInput
          value={text}
          onChangeText={text => setText(text)}
        />
      </Item>


      <Button onPress={donePressHandler}>Done</Button>
    </CustomModal>
  );
};

const Item = ({children, caption}) => {
  return <View style={styles.item}>
    <Text style={styles.label}>{caption}</Text>
    {children}
  </View>
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginBottom: 5,
    color: theme.completeModal.titleColor,
    textTransform: "uppercase",
    fontWeight: "300",
    letterSpacing: 1,
  },
  item: {
    alignItems: 'center',
    width: "100%",
    marginTop: 10,
    marginBottom: 10,
  },
  label: {
    color: theme.app.color,
    marginBottom: 5,
  },
});
