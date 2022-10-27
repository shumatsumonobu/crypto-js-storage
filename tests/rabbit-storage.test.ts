import RabbitStorage from '../src/RabbitStorage';

describe('Rabbit Storage', () => {
  test('Stores general values', () => {
    RabbitStorage.setItem('myCat', 'Tom', 'Secret Passphrase');
    expect(RabbitStorage.getItem('myCat', 'Secret Passphrase')).toBe('Tom');
  });

  test('Stores full-width characters', () => {
    RabbitStorage.setItem('myCat', 'たま', 'Secret Passphrase');
    expect(RabbitStorage.getItem('myCat', 'Secret Passphrase')).toBe('たま');
  });
});