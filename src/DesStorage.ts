import Storage from '~/core/Storage';
import {DES} from 'crypto-js';

export default class extends Storage {
  protected static CipherAlgorithm: any = DES;
}