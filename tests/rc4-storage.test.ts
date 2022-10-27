import RC4Storage from '../src/RC4Storage';

describe('RC4 Storage', () => {
  test('Stores general values', () => {
    RC4Storage.setItem('myCat', 'Tom', 'Secret Passphrase');
    expect(RC4Storage.getItem('myCat', 'Secret Passphrase')).toBe('Tom');
  });

  test('Stores full-width characters', () => {
    RC4Storage.setItem('myCat', 'たま', 'Secret Passphrase');
    expect(RC4Storage.getItem('myCat', 'Secret Passphrase')).toBe('たま');
  });
});