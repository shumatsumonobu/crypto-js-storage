import AesStorage from '../src/AesStorage';

describe('AES Storage', () => {
  test('Stores general values', () => {
    AesStorage.setItem('myCat', 'Tom', 'Secret Passphrase');
    expect(AesStorage.getItem('myCat', 'Secret Passphrase')).toBe('Tom');
  });

  test('Stores full-width characters', () => {
    AesStorage.setItem('myCat', 'たま', 'Secret Passphrase');
    expect(AesStorage.getItem('myCat', 'Secret Passphrase')).toBe('たま');
  });
});