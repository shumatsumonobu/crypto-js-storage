import isString from '~/misc/isString';
import isEmpty from '~/misc/isEmpty';

export default (key: string, secret: string) => {
  if (isEmpty(key) || !isString(key))
    throw TypeError('The first parameter key should be a string');
  else if (isEmpty(secret) || !isString(secret))
    throw TypeError('The third parameter, secret, should be a string');
}