import { WeElement, define } from 'omi'
import { observer } from './lazyload'

class LazyLoad extends WeElement {
  static observe = true;

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
      <iframe {...data} /> :
      <img {...data} />
  }
}

define('omi-lazyload', LazyLoad, true)