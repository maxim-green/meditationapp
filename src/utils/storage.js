import AsyncStorage from '@react-native-async-storage/async-storage';

export const settingsStorage = {
  async set(settings) {
    try {
      const updatedSettings = {...(await this.get()), ...settings};
      await AsyncStorage.setItem('settings', JSON.stringify(updatedSettings));
      return updatedSettings;
    } catch (e) {
      console.log(e);
    }
  },

  async get() {
    try {
      const settings = await AsyncStorage.getItem('settings');
      if (settings) {
        return JSON.parse(settings);
      } else {
        return {};
      }
    } catch (e) {
      console.log(e);
    }
  },
};

export const meditationsStorage = {
  async add(meditationData) {
    try {
      const storedMeditations = await this.get();
      const meditations = [...storedMeditations, meditationData];
      await AsyncStorage.setItem('meditations', JSON.stringify(meditations));
      return meditationData;
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
      await AsyncStorage.setItem('meditations', JSON.stringify(meditations));
      return id;
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
};
