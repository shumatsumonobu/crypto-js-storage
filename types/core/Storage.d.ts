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
    static setItem(key: string, value: string, secret: string): void;
    /**
     * Reads an encrypted entry from localStorage and decrypts it.
     * @param  key     localStorage key.
     * @param  secret  Passphrase used for decryption.
     * @returns        Decrypted string, or `null` if the key does not exist.
     */
    static getItem(key: string, secret: string): string | null;
    /**
     * Removes a single entry from localStorage.
     * @param key  localStorage key to remove.
     */
    static removeItem(key: string): void;
    /**
     * Clears all entries from localStorage.
     */
    static clear(): void;
}
