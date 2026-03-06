# Changelog

## [1.0.2] - 2026/03/06

### Improved
- Rewrote README with full API reference, algorithm descriptions, and usage examples for both ESM and UMD.
- Removed the external documentation site (`docs/`) — everything is now in the README.
- Added more test cases covering `removeItem`, `clear`, non-existent key lookup, and input validation errors.
- Replaced deprecated `rollup-plugin-terser` with `@rollup/plugin-terser`.
- Removed unused dependencies (`fetch-mock`, `@rollup/plugin-replace`).

## [1.0.1] - 2022/10/27

### Fixed
- Resolved a bundler compatibility issue that caused errors when loading crypto-js-storage through tools like Webpack.

## [1.0.0] - 2022/10/27

- Initial release.
