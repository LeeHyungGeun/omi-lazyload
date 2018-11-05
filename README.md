# omi-lazyload

Simple Lazyload Library for Omi

## Install

```js
npm install omi-lazyload
```

## Usage

```js
import  { render, define, WeElement } from 'omi'
import 'omi-lazyload'

define('my-app', class extends WeElement {
  render() {
    return (
      <div class="main">
        <omi-lazyload src="https://github.com/Tencent/omi/blob/master/assets/omi-logo.svg" />
      </div>
    )
  }
})

render(<my-app />< 'body')
```

## License

MIT © LeeHyungGeun