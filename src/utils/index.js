export const formattedTime = (time) => {
  const secNum = time / 1000;
  const hours = Math.floor(secNum / 3600);
  const minutes = Math.floor((secNum - hours * 3600) / 60);
  let seconds = Math.floor(secNum - hours * 3600 - minutes * 60);
  if (seconds < 10) seconds = `0${seconds}`;
  return `${minutes}:${seconds}`;
};
