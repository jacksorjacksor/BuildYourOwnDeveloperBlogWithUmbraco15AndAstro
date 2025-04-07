export function isNullOrWhiteSpace(str?: string) {
    return str === null || str === undefined || str.trim() === '';
  }
  