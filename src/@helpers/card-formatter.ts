export const allUpperCaseFirst = (str: string) => str.replace(/\b\w/g, (match) => match.toUpperCase());
export const addDashes = (str: string) => str.replace(/ /g, '-');
export const removeDashes = (str: string) => str.replace(/-/g, ' ');
