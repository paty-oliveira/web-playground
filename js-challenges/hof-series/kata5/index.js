export function countLanguages(list) {
  const count = {};

  for ({ language } of list) {
    if (count[language]) {
      count[language] += 1;
    } else {
      count[language] = 1;
    }
  }
  return count;
}
