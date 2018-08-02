# function.this

[![Build Status](https://travis-ci.com/WebReflection/function.this.svg?branch=master)](https://travis-ci.com/WebReflection/function.this) [![Coverage Status](https://coveralls.io/repos/github/WebReflection/function.this/badge.svg?branch=master)](https://coveralls.io/github/WebReflection/function.this?branch=master)

Makes context oriented functions easily usable via `|>` pipeline operator.

### In a nutshell

This module enhances the `Function.prototype` in a similar way:
```js
Function.prototype.this = function () {
  return self => this.apply(self, arguments);
};
```

You can then use any method that uses `this` right away.

```js
const {map, sort} = Array.prototype;
const names = document.querySelectorAll('*')
                |> map.this(el => el.nodeName)
                |> sort.this();
```
