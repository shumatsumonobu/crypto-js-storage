import Storage from '~/core/Storage';
import {AES} from 'crypto-js';

export default class extends Storage {
  protected static CipherAlgorithm: any = AES;
}