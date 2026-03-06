import Storage from '~/core/Storage';
/**
 * Encrypted localStorage using the Triple DES algorithm.
 */
export default class TripleDesStorage extends Storage {
    protected static CipherAlgorithm: any;
}
