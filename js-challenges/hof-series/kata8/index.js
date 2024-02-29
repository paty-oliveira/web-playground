const continents = ["Africa", "Americas", "Europe", "Oceania", "Asia"];

export function allContinents(list) {
  const devContinents = [...new Set(list.map((dev) => dev.continent))];

  return continents.every((continent) => devContinents.includes(continent));
}
