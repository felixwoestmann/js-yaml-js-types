js-yaml-js-types-esm
================

<!--[![CI](https://github.com/nodeca/js-yaml-js-types/workflows/CI/badge.svg?branch=master)](https://github.com/nodeca/js-yaml-js-types/actions)-->
[![NPM version](https://img.shields.io/npm/v/js-yaml-js-types.svg)](https://www.npmjs.org/package/js-yaml-js-types-esm)

This package is a fork of [js-yaml-js-types](https://github.com/nodeca/js-yaml-js-types) that adds support for ES modules. It provides extra types for js-yaml:

> js-yaml extra types:
>
> - !!js/regexp /pattern/gim
> - !!js/undefined ''
> - !!js/function 'function () {...}'


Installation
------------

```sh
npm install js-yaml-js-types-esm
```


Usage
-----

```js
import import yaml from "js-yaml";
import { all as unsafe } from "js-yaml-js-types";

const schema = yaml.DEFAULT_SCHEMA.extend(unsafe);

const src = `
- !!js/regexp /pattern/gim
- !!js/undefined ''
- !!js/function 'function () { return true }'
`

yaml.load(src, { schema });
```
