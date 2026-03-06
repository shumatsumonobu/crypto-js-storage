import Storage from '~/core/Storage';
import {AES} from 'crypto-js';

/**
 * Encrypted localStorage using the AES algorithm.
 */
export default class AesStorage extends Storage {
  protected static CipherAlgorithm: any = AES;
}
