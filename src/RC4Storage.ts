import Storage from '~/core/Storage';
import {RC4} from 'crypto-js';

/**
 * Encrypted localStorage using the RC4 stream cipher.
 */
export default class RC4Storage extends Storage {
  protected static CipherAlgorithm: any = RC4;
}
