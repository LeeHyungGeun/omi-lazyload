import { WeElement, define } from 'omi'
import { observer } from './lazyload'

class LazyLoad extends WeElement {
  static observe = true;

  static get data() {
    return {
    }
  }

  install() {
    const props = this.props;
    this.data = {
      ...this.props,
      'data-src': props.src,
      src: undefined,
      type: undefined
    }
  }

  installed() {
    observer.observe(this)
  }

  render(props, data) {
    const element = props.element ? props.element.toLowerCase() : 'img'
    return element === 'iframe' ?
      <iframe {...this.data} /> :
      <img {...this.data} />
  }
}

define('omi-lazyload', LazyLoad, false)