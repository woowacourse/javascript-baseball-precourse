function getStrikeCount(origin, compared) {
  return Array.from(origin).filter((_, i) => origin[i] === compared[i]).length;
}

export default getStrikeCount;
