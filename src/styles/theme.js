import {StyleSheet} from "react-native";
import { useSelector } from "react-redux";

const lightTheme = StyleSheet.create({
  text: {
    color: '#888'
  },
  app: {
    backgroundColor: '#F7FBFC',
  },
  statusBar: {
    barStyle: 'dark-content',
    color: '#769FCD',
  },
  navbar: {
    backgroundColor: '#fff',
    shadowColor: '#214a7a',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
  },
  title: {
    color: '#769FCD',
  },
  bottomNavigation: {
    color: '#769FCD',
    backgroundColor: '#fff',
    shadowColor: '#214a7a',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
  },
  button: {
    backgroundColor: '#769FCD',
    borderRadius: 25,
  },
  buttonText: {
    color: '#F7FBFC',
  },
  buttonPressed: {
    backgroundColor: '#214a7a',
  },
  modal: {
    backgroundColor: '#fff',
    borderRadius: 25,
    alignItems: 'center',
    shadowColor: '#214a7a',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
  },
  slider: {
    minimumTrackTintColor: '#B9D7EA',
    maximumTrackTintColor: '#B9D7EA',
    thumbTintColor: '#769FCD',
  },
  timerDisplay: {
    fontWeight: '200',
    fontSize: 72,
    color: '#769FCD',
  },
  completeModalTitle: {
    fontSize: 20,
    textTransform: "uppercase",
    fontWeight: "300",
    letterSpacing: 1,
    color: '#769FCD',
  },
  historyItem: {
    backgroundColor: '#fff',
    borderRadius: 25,
    shadowColor: '#214a7a',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
  },
  moodIcon: {
    color: '#769FCD',
  },
  moodIconInverse: {
    color: '#F7FBFC',
  },
  moodButton: {
    borderColor: '#769FCD',
    borderRadius: 25,
    borderWidth: 1,
    borderStyle: 'solid',
  },
  moodButtonActive: {
    backgroundColor: '#769FCD',
  },
  moonIcon: {
    color: '#769FCD'
  },
  noteInput: {
    borderWidth: 1,
    borderRadius: 25,
    borderColor: '#769FCD',
    fontSize: 18,
    color: '#888',
  },
});
const darkTheme = StyleSheet.create({
  text: {
    color: '#DADFF7'
  },
  app: {
    backgroundColor: '#04293A',
  },
  statusBar: {
    barStyle: 'light-content',
  },
  navbar: {
    backgroundColor: '#041C32',
    shadowColor: '#000',
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 10,
  },
  title: {
    color: '#BBBDF6',
  },
  bottomNavigation: {
    color: '#BBBDF6',
    backgroundColor: '#041C32',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
  },
  button: {
    backgroundColor: '#BBBDF6',
    borderRadius: 25,
  },
  buttonText: {
    color: '#04293A',
  },
  buttonPressed: {
    backgroundColor: '#064663',
  },
  modal: {
    backgroundColor: '#041C32',
    borderRadius: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
  },
  slider: {
    minimumTrackTintColor: '#064663',
    maximumTrackTintColor: '#064663',
    thumbTintColor: '#BBBDF6',
  },
  timerDisplay: {
    fontWeight: '200',
    fontSize: 72,
    color: '#BBBDF6',
  },
  completeModalTitle: {
    fontSize: 20,
    textTransform: "uppercase",
    fontWeight: "300",
    letterSpacing: 1,
    color: '#BBBDF6',
  },
  historyItem: {
    backgroundColor: '#041C32',
    borderRadius: 25,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
  },
  moodIcon: {
    color: '#BBBDF6',
  },
  moodIconInverse: {
    color: '#04293A',
  },
  moodButton: {
    borderColor: '#BBBDF6',
    borderRadius: 25,
    borderWidth: 1,
    borderStyle: 'solid',
  },
  moodButtonActive: {
    backgroundColor: '#BBBDF6',
  },
  moonIcon: {
    color: '#BBBDF6'
  },
  noteInput: {
    borderWidth: 1,
    borderRadius: 25,
    borderColor: '#BBBDF6',
    fontSize: 18,
    color: '#DADFF7',
  },
});

export const useTheme = () => {
  const theme = useSelector(state => state.app.settings.theme)
  if (theme === 'dark') return darkTheme
  if (theme === 'light') return lightTheme
  return lightTheme
}
