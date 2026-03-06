import Storage from '~/core/Storage';
/**
 * Encrypted localStorage using the Rabbit (legacy) stream cipher.
 */
export default class RabbitLegacyStorage extends Storage {
    protected static CipherAlgorithm: any;
}
