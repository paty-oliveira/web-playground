function getNumberPeopleInBus(busStops: number[][]): number {
  return busStops.reduce(
    (peoplesInBus, currentBusStop) =>
      peoplesInBus + currentBusStop[0] - currentBusStop[1],
    0
  );
}

export default getNumberPeopleInBus;
