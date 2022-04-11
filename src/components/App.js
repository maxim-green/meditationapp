import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HistoryScreen} from './_screens/HistoryScreen';
import {TimerScreen} from './_screens/TimerScreen';
import {SettingsScreen} from './_screens/SettingsScreen';
import {store} from '../redux/store';
import {Provider, useDispatch} from 'react-redux';
import {fetchSettings} from '../redux/settings/settings.thunk';
import { initTimer } from "../redux/timer/timer.thunk";

const Stack = createNativeStackNavigator();

function App() {
  const dispatch = useDispatch();

  // todo rename settings reducer to app reducer and move logit to single initApp thunk
  useEffect(() => {
    dispatch(fetchSettings());
    dispatch(initTimer())
  }, [dispatch]);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'fade',
        }}>
        <Stack.Screen name={'Timer'} component={TimerScreen} />
        <Stack.Screen name={'History'} component={HistoryScreen} />
        <Stack.Screen name={'Settings'} component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function AppContainer() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
