import trim from '~/misc/trim';

/**
 * Returns `true` if the string is empty or contains only whitespace.
 */
export default (value: string): boolean => {
  return trim(value) === '';
}
