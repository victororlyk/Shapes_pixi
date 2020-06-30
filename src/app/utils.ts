export const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '0x';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return parseInt(color, 16);
};

