import RabbitStorage from '../src/RabbitStorage';

describe('RabbitStorage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  // -- setItem / getItem --

  test('encrypts and decrypts an ASCII string', () => {
    RabbitStorage.setItem('name', 'Tom', 'secret');
    expect(RabbitStorage.getItem('name', 'secret')).toBe('Tom');
  });

  test('encrypts and decrypts a multibyte string', () => {
    RabbitStorage.setItem('name', 'たま', 'secret');
    expect(RabbitStorage.getItem('name', 'secret')).toBe('たま');
  });

  test('overwrites an existing entry', () => {
    RabbitStorage.setItem('name', 'Tom', 'secret');
    RabbitStorage.setItem('name', 'Jerry', 'secret');
    expect(RabbitStorage.getItem('name', 'secret')).toBe('Jerry');
  });

  test('stores the value as an encrypted (non-plaintext) string in localStorage', () => {
    RabbitStorage.setItem('name', 'Tom', 'secret');
    expect(localStorage.getItem('name')).not.toBe('Tom');
  });

  // -- getItem edge cases --

  test('returns null for a non-existent key', () => {
    expect(RabbitStorage.getItem('missing', 'secret')).toBeNull();
  });

  // -- removeItem --

  test('removes a single entry', () => {
    RabbitStorage.setItem('name', 'Tom', 'secret');
    RabbitStorage.removeItem('name');
    expect(RabbitStorage.getItem('name', 'secret')).toBeNull();
  });

  // -- clear --

  test('clears all entries', () => {
    RabbitStorage.setItem('a', '1', 'secret');
    RabbitStorage.setItem('b', '2', 'secret');
    RabbitStorage.clear();
    expect(RabbitStorage.getItem('a', 'secret')).toBeNull();
    expect(RabbitStorage.getItem('b', 'secret')).toBeNull();
  });

  // -- validation --

  test('throws TypeError when key is empty', () => {
    expect(() => RabbitStorage.setItem('', 'value', 'secret')).toThrow(TypeError);
  });

  test('throws TypeError when secret is empty', () => {
    expect(() => RabbitStorage.setItem('key', 'value', '')).toThrow(TypeError);
  });
});
