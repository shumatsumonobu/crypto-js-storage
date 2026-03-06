import Storage from '~/core/Storage';
import {TripleDES} from 'crypto-js';

/**
 * Encrypted localStorage using the Triple DES algorithm.
 */
export default class TripleDesStorage extends Storage {
  protected static CipherAlgorithm: any = TripleDES;
}
