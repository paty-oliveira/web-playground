export function countDevelopers(list) {
  return list.filter(
    (developer) =>
      developer.language === "JavaScript" && developer.continent === "Europe"
  ).length;
}
