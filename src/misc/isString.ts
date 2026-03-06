/**
 * Returns `true` if the value is a string primitive or a String object.
 */
export default (value: any): boolean => {
  return typeof value === 'string' || value instanceof String;
}
