import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HistoryScreen} from './_screens/HistoryScreen';
import {TimerScreen} from './_screens/TimerScreen';
import {SettingsScreen} from './_screens/SettingsScreen';
import {store} from '../redux/store';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {init} from '../redux/app/app.thunk';
import {Text, View} from 'react-native';

const Stack = createNativeStackNavigator();

function App() {
  const initialized = useSelector(state => state.app.initialized);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(init());
  }, [dispatch]);

  if (!initialized) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

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
