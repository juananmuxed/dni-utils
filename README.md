# 🏷️ DNI Utils
__Utilities to work with the Spanish DNI__

[![npm (scoped)](https://img.shields.io/npm/v/@muxed/dni-utils.svg?label=NPM)](https://www.npmjs.com/package/@muxed/dni-utils) [![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@muxed/dni-utils?label=Minified%20size)](https://www.npmjs.com/package/@muxed/dni-utils) [![License](https://img.shields.io/github/license/juananmuxed/dni-utils?label=License)](LICENSE) ![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/juananmuxed/dni-utils/publish.yml?label=Workflow)

[![Discord](https://img.shields.io/discord/324463341819133953?color=purple&label=Discord&logo=discord)](https://discord.gg/88rzwfU) 

## 🥪 Install
```shell
$ npm install @muxed/dni-utils
```

## 🎉 Usage

Import the functions you want
```ts
import {
  isCif,
  isNie,
  isNif,
} from "./../src/modules/validator";

```

**Functions available**

```ts
const dni = '54148871V';
// Check validity (any NIE, NIF or CIF). Return `true` or `false`.
isValid(dni);
// Check validity (NIE, NIF or CIF) . Return `true` or `false`.
isNif(dni);
isNie(dni);
isCif(dni);
// Return an Object with society type and province. Format: `{ society: String, province: String }`
dataNif(dni);
// Return the type of DNI (`NIE`, `NIF` or `CIF`) or `INVALID`.
typeDNI(dni);
```

__IMPORTANT__: Obsolete CIFs isn't supported (return INVALID)

## 🟢 Testing
Install the Jest dependencies if not in global
```shell
$ npm install
```
Run the tests
```shell
$ npm run test
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