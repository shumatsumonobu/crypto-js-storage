import Storage from '~/core/Storage';
import {RabbitLegacy} from 'crypto-js';

/**
 * Encrypted localStorage using the Rabbit (legacy) stream cipher.
 */
export default class RabbitLegacyStorage extends Storage {
  protected static CipherAlgorithm: any = RabbitLegacy;
}
