[![CryptoStorage Logo](hero.svg)](https://takuya-motoshima.github.io/crypto-js-storage/#install)

CryptoStorage stores data in a local storeage using standard and secure encryption algorithms.  
<!-- The demonstration is [here](https://takuya-motoshima.github.io/crypto-js-storage/demo). -->

## Documentation
* [CryptoStorage Documentation](https://takuya-motoshima.github.io/crypto-js-storage/)
* [Changelog](CHANGELOG.md)

## Installation
```sh
npm install --save crypto-js-storage
```

## Unit testing
```sh
npm run test
# > crypto-js-storage@1.0.0 test
# > jest

# PASS tests/rc4-storage.test.ts (27.452 s)
# PASS tests/des-storage.test.ts (27.973 s)
# PASS tests/rabbit-storage.test.ts (27.583 s)
# PASS tests/triple-des-storage.test.ts (28.703 s)
# PASS tests/rabbit-legacy-storage.test.ts (28.38 s)
# PASS tests/aes-storage.test.ts (29.138 s)
# A worker process has failed to exit gracefully and has been force exited. This is likely caused by tests leaking due to improper teardown. Try running with --detectOpenHandles to find leaks. Active timers can also cause this, ensure that .unref() was called on them.

# Test Suites: 6 passed, 6 total
# Tests:       12 passed, 12 total
# Snapshots:   0 total
# Time:        32.593 s
# Ran all test suites.
```

## Author
**Takuya Motoshima**

* [github/takuya-motoshima](https://github.com/takuya-motoshima)
* [twitter/TakuyaMotoshima](https://twitter.com/TakuyaMotoshima)
* [facebook/takuya.motoshima.7](https://www.facebook.com/takuya.motoshima.7)

## License
[MIT](LICENSE)