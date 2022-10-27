import DesStorage from '../src/DesStorage';

describe('DES Storage', () => {
  test('Stores general values', () => {
    DesStorage.setItem('myCat', 'Tom', 'Secret Passphrase');
    expect(DesStorage.getItem('myCat', 'Secret Passphrase')).toBe('Tom');
  });

  test('Stores full-width characters', () => {
    DesStorage.setItem('myCat', 'たま', 'Secret Passphrase');
    expect(DesStorage.getItem('myCat', 'Secret Passphrase')).toBe('たま');
  });
});