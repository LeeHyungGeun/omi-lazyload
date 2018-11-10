import { define, WeElement, render } from 'omi'
import '../../src/index'

define('my-app', class extends WeElement {
  static observe = true

  css() {
    return `
      .app {
        margin: 0 auto;
      }
      .empty {
        width: 100%;
        height: 100vh;
        background-color: #e9ecef;
        text-align: center;
        vertical-align: middle;
      }
      .img {
        display: flex;
        justify-content: center;
      }
    `
  }

  render(props, data) {
    return (
      <div class="app">
        <div class="empty">Empty Page</div>
        <div class="img">
          <omi-lazyload
            src="./assets/omi-logo.svg"
            alt="Omi Logo"
          />
        </div>
        <div class="img">
          <omi-lazyload
            src="./assets/omi-logo.svg"
            alt="Omi Logo"
          />
        </div>
        <div class="img">
          <omi-lazyload
            src="./assets/omi-logo.svg"
            alt="Omi Logo"
          />
        </div>
        <div class="img">
          <omi-lazyload
            src="./assets/omi-logo.svg"
            alt="Omi Logo"
          />
        </div>
      </div>
    )
  }
})

render(<my-app />, '#container')