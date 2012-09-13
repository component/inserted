
# inserted

  Invoke a callback when a DOM element is inserted.

## Installation

    $ component install component/inserted

## Example

```js
var inserted = require('inserted');
inserted(el, function(){
  console.log('element was inserted!');
});
```

## API

### inserted(el, fn)

  Invokes `fn` when `el` is inserted from the DOM.

### .interval

  The `setInterval` fallback uses `inserted.interval`, defaulting to 200ms.

# License

  MIT
