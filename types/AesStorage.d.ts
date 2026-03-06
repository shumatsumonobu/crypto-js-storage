import Storage from '~/core/Storage';
/**
 * Encrypted localStorage using the AES algorithm.
 */
export default class AesStorage extends Storage {
    protected static CipherAlgorithm: any;
}
