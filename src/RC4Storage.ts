import Storage from '~/core/Storage';
import {RC4} from 'crypto-js';

export default class extends Storage {
  protected static CipherAlgorithm: any = RC4;
}