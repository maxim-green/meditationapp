export const addStartingZeros = (number, length) => {
  let result = number.toString();
  while (result.length < length) {
    result = '0' + result;
  }
  return result;
};

export const getFormattedTime = seconds => {
  const mm = addStartingZeros(Math.floor(seconds / 60), 2);
  const ss = addStartingZeros(seconds % 60, 2);
  return `${mm}:${ss}`;
};

export const getFormattedDate = date => {
  const day = addStartingZeros(date.getDate(), 2);
  const month = addStartingZeros(date.getMonth() + 1, 2);
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
};

const getMoonAge = (date = new Date()) => {
  const LUNAR_MONTH = 29.53059;
  const PAST_NEW_MOON_DATE = new Date('Apr 01 2022 06:34:00 GMT-0000');

  const diffTime = Math.abs(date - PAST_NEW_MOON_DATE);
  const diffDays = diffTime / (1000 * 60 * 60 * 24);

  return diffDays % LUNAR_MONTH;
};

export const getMoonPhase = (date = new Date()) => {
  const age = getMoonAge(date);
  console.log(date);

  if (age >= 27.68493 || age < 1.84566) {
    return 'New';
  }
  if (age >= 1.84566 && age < 5.53699) {
    return 'Waxing Crescent';
  }
  if (age >= 5.53699 && age < 9.22831) {
    return 'First Quarter';
  }
  if (age >= 9.22831 && age < 12.91963) {
    return 'Waxing Gibbous';
  }
  if (age >= 12.91963 && age < 16.61096) {
    return 'Full';
  }
  if (age >= 16.61096 && age < 20.30228) {
    return 'Waning Gibbous';
  }
  if (age >= 20.30228 && age < 23.99361) {
    return 'Last Quarter';
  }
  if (age >= 23.99361 && age < 27.68493) {
    return 'Waning Crescent';
  }
};
