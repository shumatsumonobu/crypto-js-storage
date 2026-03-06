import Storage from '~/core/Storage';
/**
 * Encrypted localStorage using the Rabbit stream cipher.
 */
export default class RabbitStorage extends Storage {
    protected static CipherAlgorithm: any;
}
