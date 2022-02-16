# number-digit
[![Build Status](https://travis-ci.org/gonenoob/is-empty-object.svg?branch=master)](https://travis-ci.org/gonenoob/is-empty-object)

## Install

```sh
$ npm install --save is-empty-object
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