import React, { useState } from "react";
import { View, Text, StyleSheet} from "react-native";
import { Button } from "../_library/Button";
import { MoodPicker } from "./MoodPicker";
import { useTheme } from "../../styles/theme";
import { CustomModal } from "../_library/CustomModal";
import { NoteInput } from "./NoteInput";

export const CompleteModal = ({ onDone }) => {
  const theme = useTheme()
  const [mood, setMood] = useState("neutral");
  const [text, setText] = useState("");

  const donePressHandler = () => {
    if (onDone) {
      onDone(mood, text);
    }
  };

  return (
    <CustomModal>
      <Text style={[styles.title, theme.completeModalTitle]}>Meditation completed!</Text>

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
  const theme = useTheme()
  return <View style={styles.item}>
    <Text style={[styles.label, theme.text]}>{caption}</Text>
    {children}
  </View>
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 5,
  },
  item: {
    alignItems: 'center',
    width: "100%",
    marginTop: 10,
    marginBottom: 10,
  },
  label: {
    marginBottom: 5,
  },
});
