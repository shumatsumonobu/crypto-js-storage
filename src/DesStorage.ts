import Storage from '~/core/Storage';
import {DES} from 'crypto-js';

/**
 * Encrypted localStorage using the DES algorithm.
 */
export default class DesStorage extends Storage {
  protected static CipherAlgorithm: any = DES;
}
