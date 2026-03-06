import AesStorage from '../src/AesStorage';

describe('AesStorage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  // -- setItem / getItem --

  test('encrypts and decrypts an ASCII string', () => {
    AesStorage.setItem('name', 'Tom', 'secret');
    expect(AesStorage.getItem('name', 'secret')).toBe('Tom');
  });

  test('encrypts and decrypts a multibyte string', () => {
    AesStorage.setItem('name', 'たま', 'secret');
    expect(AesStorage.getItem('name', 'secret')).toBe('たま');
  });

  test('overwrites an existing entry', () => {
    AesStorage.setItem('name', 'Tom', 'secret');
    AesStorage.setItem('name', 'Jerry', 'secret');
    expect(AesStorage.getItem('name', 'secret')).toBe('Jerry');
  });

  test('stores the value as an encrypted (non-plaintext) string in localStorage', () => {
    AesStorage.setItem('name', 'Tom', 'secret');
    expect(localStorage.getItem('name')).not.toBe('Tom');
  });

  // -- getItem edge cases --

  test('returns null for a non-existent key', () => {
    expect(AesStorage.getItem('missing', 'secret')).toBeNull();
  });

  // -- removeItem --

  test('removes a single entry', () => {
    AesStorage.setItem('name', 'Tom', 'secret');
    AesStorage.removeItem('name');
    expect(AesStorage.getItem('name', 'secret')).toBeNull();
  });

  // -- clear --

  test('clears all entries', () => {
    AesStorage.setItem('a', '1', 'secret');
    AesStorage.setItem('b', '2', 'secret');
    AesStorage.clear();
    expect(AesStorage.getItem('a', 'secret')).toBeNull();
    expect(AesStorage.getItem('b', 'secret')).toBeNull();
  });

  // -- validation --

  test('throws TypeError when key is empty', () => {
    expect(() => AesStorage.setItem('', 'value', 'secret')).toThrow(TypeError);
  });

  test('throws TypeError when secret is empty', () => {
    expect(() => AesStorage.setItem('key', 'value', '')).toThrow(TypeError);
  });
});
