import React from "react";
import { Timer } from "../Timer/Timer";
import ScreenLayout from "../_layout/ScreenLayout";

export function TimerScreen({navigation}) {
  return (
    <ScreenLayout title={'Timer'} navigation={navigation}>
        <Timer />
    </ScreenLayout>
  );
}
