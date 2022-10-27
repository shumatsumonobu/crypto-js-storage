import Storage from '~/core/Storage';
import {TripleDES} from 'crypto-js';

export default class extends Storage {
  protected static CipherAlgorithm: any = TripleDES;
}