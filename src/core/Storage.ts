import {enc} from 'crypto-js';
import validateKeyAndSecret from '~/core/validateKeyAndSecret';

export default class {
  protected static CipherAlgorithm: any;

  /**
   * Save Data to Local Storage.
   */
  public static setItem(key: string, value: string, secret: string): void {
    validateKeyAndSecret(key, secret);
    const encrypted = this.CipherAlgorithm.encrypt(value, secret);
    // const encrypted = this.CipherAlgorithm.encrypt(enc.Utf8.parse(value), secret);
    localStorage.setItem(key, encrypted.toString());
  }

  /**
   * Read Data from Local Storage.
   */
  public static getItem(key: string, secret :string): string|null {
    validateKeyAndSecret(key, secret);
    const value = localStorage.getItem(key);
    if (value == null)
      return null;
    const bytes = this.CipherAlgorithm.decrypt(value, secret);
    return bytes.toString(enc.Utf8);
  }

  /**
   * Remove Data from Local Storage.
   */
  public static removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  /**
   * Remove All (Clear Local Storage).
   */
  public static clear(): void {
    localStorage.clear();
  }
}