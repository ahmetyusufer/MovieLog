export function converMinuteToHours(minute) {
  const hours = Math.floor(minute / 60);
  const minutes = minute % 60;
  return `${hours}h ${minutes}m`;
}

export function convertToSpace(string) {
  if (string) {
    const [year, month, day] = string.split("-");
    return `${day}.${month}.${year}`;
  }
  return string;
}

export function convertToSplitGenres(genres) {
  return genres?.map((genre) => genre.name).join(", ");
}
