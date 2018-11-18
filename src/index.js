import { WeElement, define } from 'omi'
import { observer } from './lazyload'

class LazyLoad extends WeElement {
  static observe = true
  static noSlot = true

  static get data() {
    return {}
  }

  install() {
    this.data = {
      ...this.props,
      show: false
    }
  }

  installed() {
    observer.observe(this)
  }

  render(props, data) {
    return this.data.show && this.props.children
  }
}

define('omi-lazyload', LazyLoad)
