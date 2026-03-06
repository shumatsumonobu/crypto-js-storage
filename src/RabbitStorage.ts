import Storage from '~/core/Storage';
import {Rabbit} from 'crypto-js';

/**
 * Encrypted localStorage using the Rabbit stream cipher.
 */
export default class RabbitStorage extends Storage {
  protected static CipherAlgorithm: any = Rabbit;
}
