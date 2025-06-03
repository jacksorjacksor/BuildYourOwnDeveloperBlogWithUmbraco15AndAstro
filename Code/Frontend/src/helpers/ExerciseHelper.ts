export function getPreviousExercise(allExercises: any[], currentPageIndex: number) {
  return allExercises.find((ex) => ex.data.sortOrder === currentPageIndex - 1) || null;
}

export function getNextExercise(allExercises: any[], currentPageIndex: number) {
  return allExercises.find((ex) => ex.data.sortOrder === currentPageIndex + 1) || null;
}