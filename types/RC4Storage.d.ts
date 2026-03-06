import Storage from '~/core/Storage';
/**
 * Encrypted localStorage using the RC4 stream cipher.
 */
export default class RC4Storage extends Storage {
    protected static CipherAlgorithm: any;
}
