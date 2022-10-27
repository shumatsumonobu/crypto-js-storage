import Storage from '~/core/Storage';
import {Rabbit} from 'crypto-js';

export default class extends Storage {
  protected static CipherAlgorithm: any = Rabbit;
}