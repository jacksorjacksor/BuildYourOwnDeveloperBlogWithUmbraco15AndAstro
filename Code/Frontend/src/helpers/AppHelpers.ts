export function isNullOrWhiteSpace(str?: string) {
  return str === null || str === undefined || str.trim() === '';
}
  
export function getFinalUrlSegment(path: string): string {
  if (isNullOrWhiteSpace(path)) {
    return '';
  }

  // Split the path into segments, filtering out empty strings
  const segments = path.split('/').filter(segment => !isNullOrWhiteSpace(segment));

  // Return the final segment if available, otherwise return an empty string
  return segments.length > 0 ? segments[segments.length - 1] : '';
}