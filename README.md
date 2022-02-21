# number-digit
[![Build Status](https://travis-ci.com/gonenoob/isEmptyObject.svg?branch=master)](https://travis-ci.com/gonenoob/isEmptyObject)

## Install

```sh
$ npm install --save obj-is-empty
```

## Usage

```js
const isEmptyObject = require('obj-is-empty')
```

## Example

```js
const isEmptyObject = require('obj-is-empty')
let isEmpty = isEmptyObject({}) //true
let isEmpty1 = isEmptyObject({[Symbol('a')]: 1}) //false
```