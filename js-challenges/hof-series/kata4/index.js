export function getFirstPython(list) {
  const firstStudent = list.find(
    (developer) => developer.language === "Python"
  );

  return firstStudent
    ? `${firstStudent.firstName}, ${firstStudent.country}`
    : "There will be no Python developers";
}
