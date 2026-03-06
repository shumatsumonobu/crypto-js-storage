import {enc} from 'crypto-js';
import validateKeyAndSecret from '~/core/validateKeyAndSecret';

/**
 * Base class for encrypted localStorage wrappers.
 * Subclasses set {@link CipherAlgorithm} to select a specific cipher (AES, DES, etc.).
 */
export default class Storage {
  /** Cipher implementation provided by crypto-js (overridden by each subclass). */
  protected static CipherAlgorithm: any;

  /**
   * Encrypts a value and stores it in localStorage.
   * @param key      localStorage key.
   * @param value    Plaintext value to encrypt.
   * @param secret   Passphrase used for encryption.
   */
  public static setItem(key: string, value: string, secret: string): void {
    validateKeyAndSecret(key, secret);
    const encrypted = this.CipherAlgorithm.encrypt(value, secret);
    localStorage.setItem(key, encrypted.toString());
  }

  /**
   * Reads an encrypted entry from localStorage and decrypts it.
   * @param  key     localStorage key.
   * @param  secret  Passphrase used for decryption.
   * @returns        Decrypted string, or `null` if the key does not exist.
   */
  public static getItem(key: string, secret: string): string|null {
    validateKeyAndSecret(key, secret);
    const raw = localStorage.getItem(key);
    if (raw == null)
      return null;
    const decrypted = this.CipherAlgorithm.decrypt(raw, secret);
    return decrypted.toString(enc.Utf8);
  }

  /**
   * Removes a single entry from localStorage.
   * @param key  localStorage key to remove.
   */
  public static removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  /**
   * Clears all entries from localStorage.
   */
  public static clear(): void {
    localStorage.clear();
  }
}
