export function greetDevelopers(list) {
  return list.map((developer) => {
    return {
      ...developer,
      greeting: `Hi ${developer.firstName}, what do you like the most about ${developer.language}?`,
    };
  });
}
