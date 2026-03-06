/**
 * Trims leading and trailing whitespace (including full-width spaces) from a string.
 * @param value    Input string (or `null`).
 * @param toLower  If `true`, the result is also lowercased.
 */
export default (value: string|null, toLower = false): string|null => {
  if (value == null)
    return value;
  value = value.replace(/^[\s\u3000]+|[\s\u3000]+$/g, '');
  if (toLower)
    value = value.toLowerCase();
  return value;
}
