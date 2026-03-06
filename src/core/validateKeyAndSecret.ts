import isString from '~/misc/isString';
import isEmpty from '~/misc/isEmpty';

/**
 * Validates that both `key` and `secret` are non-empty strings.
 * @param key     localStorage key.
 * @param secret  Passphrase for encryption/decryption.
 * @throws {TypeError} If either argument is not a non-empty string.
 */
export default (key: string, secret: string): void => {
  if (!isString(key) || isEmpty(key))
    throw new TypeError('key must be a non-empty string');
  if (!isString(secret) || isEmpty(secret))
    throw new TypeError('secret must be a non-empty string');
}
