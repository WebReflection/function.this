# function.this

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
