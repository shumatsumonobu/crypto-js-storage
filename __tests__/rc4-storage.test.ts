import RC4Storage from '../src/RC4Storage';

describe('RC4Storage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  // -- setItem / getItem --

  test('encrypts and decrypts an ASCII string', () => {
    RC4Storage.setItem('name', 'Tom', 'secret');
    expect(RC4Storage.getItem('name', 'secret')).toBe('Tom');
  });

  test('encrypts and decrypts a multibyte string', () => {
    RC4Storage.setItem('name', 'たま', 'secret');
    expect(RC4Storage.getItem('name', 'secret')).toBe('たま');
  });

  test('overwrites an existing entry', () => {
    RC4Storage.setItem('name', 'Tom', 'secret');
    RC4Storage.setItem('name', 'Jerry', 'secret');
    expect(RC4Storage.getItem('name', 'secret')).toBe('Jerry');
  });

  test('stores the value as an encrypted (non-plaintext) string in localStorage', () => {
    RC4Storage.setItem('name', 'Tom', 'secret');
    expect(localStorage.getItem('name')).not.toBe('Tom');
  });

  // -- getItem edge cases --

  test('returns null for a non-existent key', () => {
    expect(RC4Storage.getItem('missing', 'secret')).toBeNull();
  });

  // -- removeItem --

  test('removes a single entry', () => {
    RC4Storage.setItem('name', 'Tom', 'secret');
    RC4Storage.removeItem('name');
    expect(RC4Storage.getItem('name', 'secret')).toBeNull();
  });

  // -- clear --

  test('clears all entries', () => {
    RC4Storage.setItem('a', '1', 'secret');
    RC4Storage.setItem('b', '2', 'secret');
    RC4Storage.clear();
    expect(RC4Storage.getItem('a', 'secret')).toBeNull();
    expect(RC4Storage.getItem('b', 'secret')).toBeNull();
  });

  // -- validation --

  test('throws TypeError when key is empty', () => {
    expect(() => RC4Storage.setItem('', 'value', 'secret')).toThrow(TypeError);
  });

  test('throws TypeError when secret is empty', () => {
    expect(() => RC4Storage.setItem('key', 'value', '')).toThrow(TypeError);
  });
});
