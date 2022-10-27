import TripleDesStorage from '../src/TripleDesStorage';

describe('TripleDES Storage', () => {
  test('Stores general values', () => {
    TripleDesStorage.setItem('myCat', 'Tom', 'Secret Passphrase');
    expect(TripleDesStorage.getItem('myCat', 'Secret Passphrase')).toBe('Tom');
  });

  test('Stores full-width characters', () => {
    TripleDesStorage.setItem('myCat', 'たま', 'Secret Passphrase');
    expect(TripleDesStorage.getItem('myCat', 'Secret Passphrase')).toBe('たま');
  });
});