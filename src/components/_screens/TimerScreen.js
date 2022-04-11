import React from "react";
import { Timer } from "../Timer/Timer";
import ScreenLayout from "../_layout/ScreenLayout";
import { useDispatch } from "react-redux";
import { addMeditation } from "../../redux/history/history.thunk";

export function TimerScreen({navigation}) {
  const dispatch = useDispatch();

  const endHandler = data => {
    dispatch(addMeditation(data));
  };

  return (
    <ScreenLayout title={'Timer'} navigation={navigation}>
        <Timer onEnd={endHandler} />
    </ScreenLayout>
  );
}
