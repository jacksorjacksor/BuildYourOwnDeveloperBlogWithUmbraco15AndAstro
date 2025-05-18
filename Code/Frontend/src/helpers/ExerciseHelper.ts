export function getPreviousExercise(allExercises: any[], currentSortOrder: number) {
  return allExercises.find((ex) => ex.data.sortOrder === currentSortOrder - 1) || null;
}

export function getNextExercise(allExercises: any[], currentSortOrder: number) {
  return allExercises.find((ex) => ex.data.sortOrder === currentSortOrder + 1) || null;
}