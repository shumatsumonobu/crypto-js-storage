import Storage from '~/core/Storage';
import {RabbitLegacy} from 'crypto-js';

export default class extends Storage {
  protected static CipherAlgorithm: any = RabbitLegacy;
}