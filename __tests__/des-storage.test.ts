import DesStorage from '../src/DesStorage';

describe('DesStorage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  // -- setItem / getItem --

  test('encrypts and decrypts an ASCII string', () => {
    DesStorage.setItem('name', 'Tom', 'secret');
    expect(DesStorage.getItem('name', 'secret')).toBe('Tom');
  });

  test('encrypts and decrypts a multibyte string', () => {
    DesStorage.setItem('name', 'たま', 'secret');
    expect(DesStorage.getItem('name', 'secret')).toBe('たま');
  });

  test('overwrites an existing entry', () => {
    DesStorage.setItem('name', 'Tom', 'secret');
    DesStorage.setItem('name', 'Jerry', 'secret');
    expect(DesStorage.getItem('name', 'secret')).toBe('Jerry');
  });

  test('stores the value as an encrypted (non-plaintext) string in localStorage', () => {
    DesStorage.setItem('name', 'Tom', 'secret');
    expect(localStorage.getItem('name')).not.toBe('Tom');
  });

  // -- getItem edge cases --

  test('returns null for a non-existent key', () => {
    expect(DesStorage.getItem('missing', 'secret')).toBeNull();
  });

  // -- removeItem --

  test('removes a single entry', () => {
    DesStorage.setItem('name', 'Tom', 'secret');
    DesStorage.removeItem('name');
    expect(DesStorage.getItem('name', 'secret')).toBeNull();
  });

  // -- clear --

  test('clears all entries', () => {
    DesStorage.setItem('a', '1', 'secret');
    DesStorage.setItem('b', '2', 'secret');
    DesStorage.clear();
    expect(DesStorage.getItem('a', 'secret')).toBeNull();
    expect(DesStorage.getItem('b', 'secret')).toBeNull();
  });

  // -- validation --

  test('throws TypeError when key is empty', () => {
    expect(() => DesStorage.setItem('', 'value', 'secret')).toThrow(TypeError);
  });

  test('throws TypeError when secret is empty', () => {
    expect(() => DesStorage.setItem('key', 'value', '')).toThrow(TypeError);
  });
});
