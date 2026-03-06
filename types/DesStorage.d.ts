import Storage from '~/core/Storage';
/**
 * Encrypted localStorage using the DES algorithm.
 */
export default class DesStorage extends Storage {
    protected static CipherAlgorithm: any;
}
