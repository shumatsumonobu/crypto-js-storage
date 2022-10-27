export default class {
    protected static CipherAlgorithm: any;
    /**
     * Save Data to Local Storage.
     */
    static setItem(key: string, value: string, secret: string): void;
    /**
     * Read Data from Local Storage.
     */
    static getItem(key: string, secret: string): string | null;
    /**
     * Remove Data from Local Storage.
     */
    static removeItem(key: string): void;
    /**
     * Remove All (Clear Local Storage).
     */
    static clear(): void;
}
