# 🏷️ DNI Utils
__Utilities to work with the Spanish DNI__

[![npm (scoped)](https://img.shields.io/npm/v/@muxed/dni-utils.svg)](https://www.npmjs.com/package/@muxed/dni-utils) [![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@muxed/dni-utils?label=Minified%20size)](https://www.npmjs.com/package/@muxed/dni-utils) ![Coveralls github](https://img.shields.io/coveralls/github/muxed/dni-utils?label=Coverage) [![License](https://img.shields.io/github/license/juananmuxed/dni-utils?label=License)](LICENSE) 

[![Discord](https://img.shields.io/discord/324463341819133953?color=purple&label=Discord&logo=discord)](https://discord.gg/88rzwfU) 

## 🥪 Install
```shell
npm install @muxed/dni-utils
```

## 🎉 Usage
```js
const dni = require('@muxed/dni-utils');

// Start the class with NIF
let validator = new dni.validator('22414222P');
// Start the class with NIE and SUPPORT NUMBER
let validator = new dni.validator('X2414222P','E24210042');

validator.isValid(); // Return true or false if DNI is valid
validator.typeDNI(); // Return the type of DNI (NIE or NIF) INVALID if is not valid
validator.validSupportNumber(); // Return true or false if Support Number is valid
validator.sanitizeSupportNumber(); // Return the Support Number (NIE) in E00000001 format
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