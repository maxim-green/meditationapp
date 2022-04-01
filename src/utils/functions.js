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

export const getDate = () => {
  const date = new Date()
  const day = addStartingZeros(date.getDate(), 2)
  const month = addStartingZeros(date.getMonth() + 1, 2)
  const year = date.getFullYear()
  return `${day}.${month}.${year}`
}
