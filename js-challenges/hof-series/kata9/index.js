const agesFirstNumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

function isAgeDiverse(list) {
  const devAges = list.map((dev) => dev.age.toString());

  const agesUntilNineties = devAges
    .filter((age) => age.length === 2)
    .map((age) => age[0]);

  const containsAgesUntilNineties =
    agesFirstNumber.length === agesUntilNineties.length &&
    agesUntilNineties.every((age) => agesFirstNumber.includes(age));

  const containsCentenarian = devAges.some((age) => age.length > 2);

  return containsAgesUntilNineties && containsCentenarian;
}
