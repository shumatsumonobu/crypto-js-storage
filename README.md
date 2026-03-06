<p align="center">
  <img src="https://img.shields.io/npm/v/crypto-js-storage" alt="npm version" />
  <img src="https://img.shields.io/npm/l/crypto-js-storage" alt="license" />
  <img src="https://img.shields.io/npm/dt/crypto-js-storage" alt="downloads" />
</p>

# crypto-js-storage

Encrypt everything you store.
**crypto-js-storage** wraps `localStorage` with battle-tested encryption algorithms — just pick a cipher and go.

## Quick Start

```sh
npm install crypto-js-storage
```

```js
import { AesStorage } from 'crypto-js-storage';

AesStorage.setItem('token', 'my-secret-value', 'passphrase');

const value = AesStorage.getItem('token', 'passphrase');
// => 'my-secret-value'
```

## Supported Algorithms

| Class | Algorithm | Description |
|:--|:--|:--|
| `AesStorage` | AES | U.S. Federal standard (FIPS). Selected after a 5-year evaluation of 15 competing designs. |
| `TripleDesStorage` | Triple DES | Applies DES three times per block. Believed to be secure. |
| `RabbitStorage` | Rabbit | High-performance stream cipher. eSTREAM Portfolio finalist. |
| `DesStorage` | DES | Legacy block cipher. Now considered insecure due to small key size. |
| `RC4Storage` | RC4 | Fast stream cipher used in SSL/WEP. Not recommended for new projects. |

All classes share the exact same API — just swap the class name.

```js
import { RabbitStorage } from 'crypto-js-storage';

RabbitStorage.setItem('key', 'value', 'secret');
RabbitStorage.getItem('key', 'secret'); // => 'value'
```

## API

### `setItem(key, value, secret): void`
Encrypts `value` with `secret` and stores it under `key`.

### `getItem(key, secret): string | null`
Decrypts and returns the stored value. Returns `null` if the key does not exist.

### `removeItem(key): void`
Deletes a single entry.

### `clear(): void`
Wipes all localStorage entries.

## UMD / Script Tag

```html
<script src="node_modules/crypto-js-storage/dist/build.js"></script>
<script>
  const { AesStorage } = window.CryptoJsStorage;
  AesStorage.setItem('token', 'value', 'secret');
</script>
```

## Changelog

### v1.0.1 — 2022/10/27
- Fixed a bug that caused an error when loading with bundling tools such as Webpack.

### v1.0.0 — 2022/10/27
- Released.

## Author

**shumatsumonobu** &nbsp; [GitHub](https://github.com/shumatsumonobu) · [X](https://x.com/shumatsumonobu) · [Facebook](https://www.facebook.com/takuya.motoshima.7)

## License

[MIT](LICENSE)
