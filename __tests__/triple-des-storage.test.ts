import TripleDesStorage from '../src/TripleDesStorage';

describe('TripleDesStorage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  // -- setItem / getItem --

  test('encrypts and decrypts an ASCII string', () => {
    TripleDesStorage.setItem('name', 'Tom', 'secret');
    expect(TripleDesStorage.getItem('name', 'secret')).toBe('Tom');
  });

  test('encrypts and decrypts a multibyte string', () => {
    TripleDesStorage.setItem('name', 'たま', 'secret');
    expect(TripleDesStorage.getItem('name', 'secret')).toBe('たま');
  });

  test('overwrites an existing entry', () => {
    TripleDesStorage.setItem('name', 'Tom', 'secret');
    TripleDesStorage.setItem('name', 'Jerry', 'secret');
    expect(TripleDesStorage.getItem('name', 'secret')).toBe('Jerry');
  });

  test('stores the value as an encrypted (non-plaintext) string in localStorage', () => {
    TripleDesStorage.setItem('name', 'Tom', 'secret');
    expect(localStorage.getItem('name')).not.toBe('Tom');
  });

  // -- getItem edge cases --

  test('returns null for a non-existent key', () => {
    expect(TripleDesStorage.getItem('missing', 'secret')).toBeNull();
  });

  // -- removeItem --

  test('removes a single entry', () => {
    TripleDesStorage.setItem('name', 'Tom', 'secret');
    TripleDesStorage.removeItem('name');
    expect(TripleDesStorage.getItem('name', 'secret')).toBeNull();
  });

  // -- clear --

  test('clears all entries', () => {
    TripleDesStorage.setItem('a', '1', 'secret');
    TripleDesStorage.setItem('b', '2', 'secret');
    TripleDesStorage.clear();
    expect(TripleDesStorage.getItem('a', 'secret')).toBeNull();
    expect(TripleDesStorage.getItem('b', 'secret')).toBeNull();
  });

  // -- validation --

  test('throws TypeError when key is empty', () => {
    expect(() => TripleDesStorage.setItem('', 'value', 'secret')).toThrow(TypeError);
  });

  test('throws TypeError when secret is empty', () => {
    expect(() => TripleDesStorage.setItem('key', 'value', '')).toThrow(TypeError);
  });
});
