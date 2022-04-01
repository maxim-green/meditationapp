import AsyncStorage from '@react-native-async-storage/async-storage';

export const settingsStorage = {
  async setDefaultDuration(duration) {
    try {
      await AsyncStorage.setItem('defaultDuration', duration.toString())
    } catch (e) {
      console.log(e)
    }
  },
  async getDefaultDuration() {
    try {
      const duration = await AsyncStorage.getItem('defaultDuration')
      if (duration) {
        return Number.parseInt(duration)
      } else {
        return 20
      }
    } catch(e) {
      console.log(e)
    }
  },

  async setVolume(volume) {
    try {
      await AsyncStorage.setItem('volume', volume.toString())
    } catch (e) {
      console.log(e)
    }
  },
  async getVolume() {
    try {
      const volume = await AsyncStorage.getItem('volume')
      if (volume) {
        return Number.parseFloat(volume)
      } else {
        return 0.5
      }
    } catch (e) {
      console.log(e)
    }
  }
}

export const meditationsStorage = {
  async add(meditationData) {
    try {
      const storedMeditations = await this.get();
      const meditations = [...storedMeditations, meditationData];
      await AsyncStorage.setItem('meditations', JSON.stringify(meditations));
    } catch (e) {
      console.log(e);
    }
  },

  async delete(id) {
    try {
      const storedMeditations = await this.get();
      const meditations = storedMeditations.filter(
        meditation => id !== meditation.id,
      );
      await AsyncStorage.setItem('meditations', JSON.stringify(meditations))
    } catch (e) {
      console.log(e);
    }
  },

  async get() {
    try {
      const meditations = await AsyncStorage.getItem('meditations');
      if (meditations) {
        return JSON.parse(meditations);
      } else {
        return [];
      }
    } catch (e) {
      console.log(e);
    }
  },
}


