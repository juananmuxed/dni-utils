# 🏷️ DNI Utils
__Utilities to work with the Spanish DNI__

[![npm (scoped)](https://img.shields.io/npm/v/@muxed/dni-utils.svg?label=NPM)](https://www.npmjs.com/package/@muxed/dni-utils) [![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@muxed/dni-utils?label=Minified%20size)](https://www.npmjs.com/package/@muxed/dni-utils) [![License](https://img.shields.io/github/license/juananmuxed/dni-utils?label=License)](LICENSE) 

[![Discord](https://img.shields.io/discord/324463341819133953?color=purple&label=Discord&logo=discord)](https://discord.gg/88rzwfU) 

## 🥪 Install
```shell
$ npm install @muxed/dni-utils
```

## 🎉 Usage

Import the instaled Package
```js
const dni = require('@muxed/dni-utils');
```
Create a class constructor (if you need check the Support number for NIE, the second parameter acepted)
```js
// Start the class with DNI
let validator = new dni.validator('22414222P');
// Start the class with NIE and SUPPORT NUMBER
let validator = new dni.validator('X2414222P','E24210042');
```

### Functions availables
Check validity (any NIE, NIF or CIF). Return `true` or `false`.
```js
validator.isValid();
```
Check validity (NIE, NIF or CIF) . Return `true` or `false`.
```js
validator.isNif();
validator.isNie();
validator.isCif();
```
Return an Object with society type and province. Format: `{ society: String, province: String }`
```js
validator.dataNif();
```
Return the type of DNI (`NIE`, `NIF` or `CIF`) or `INVALID`.
```js
validator.typeDNI();
```
Check Support Number (for NIE). Return `true` or `false`.
```js
validator.validSupportNumber();
```
Sanitize support number (NIE). Return formated Number `E00000001`.
```js
validator.sanitizeSupportNumber(); // Return the Support Number (NIE) in E00000001 format
```

IMPORTANT: Obsolete CIFs isn't supported (return INVALID)

## 🟢 Testing
Install the Jest dependencies if not in global
```shell
$ npm install
```
Run the tests
```shell
$ npm test
```

## 🍰 Contributing

Please read [CONTRIBUTING](CONTRIBUTING.md) for details on our [CODE OF CONDUCT](CODE_OF_CONDUCT.md), and the process for submitting pull requests.

## ☕️ Buy Me a Coffee
[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/U7U21M2BE)

## 📑 License

MIT © [MuXeD](LICENSE)

<div align="center">
  <p>
    <sub>⌨️ with ❤︎ by
      <a href="https://github.com/juananmuxed">MuXeD</a>
    </sub>
  </p>
</div>