import React, { useEffect, useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { MoodButton } from "./MoodButton";
import faceBad from "../../assets/face-bad.png";
import faceNeutral from "../../assets/face-neutral.png";
import faceGood from "../../assets/face-good.png";


export const MoodSwitch = ({ value, onChange }) => {
  const [mood, setMood] = useState(value);

  useEffect(() => {
    if (onChange) onChange(mood)
  }, [mood])

  return <View style={styles.wrapper}>
    <MoodButton
      onPress={() => setMood("bad")}
      active={mood === "bad"}
      image={faceBad}
    />
    <MoodButton
      onPress={() => setMood("neutral")}
      active={mood === "neutral"}
      image={faceNeutral}
    />
    <MoodButton
      onPress={() => setMood("good")}
      active={mood === "good"}
      image={faceGood}
    />
  </View>;
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
  mood: {
    width: 50, height: 50,
  },
});
