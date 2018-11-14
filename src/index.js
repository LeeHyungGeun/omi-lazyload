import 'intersection-observer'
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
      show: false,
    }
  }
ㄴ
  installed() {
    observer.observe(this)
  }

  render(props, data) {
    return this.data.show && this.props.children
  }
}

define('omi-lazyload', LazyLoad)






    // this.loadPolyfills()
  // loadPolyfills = () => {
  //   const polyfills = []

  //   if (!this.supportsIntersectionObserver()) {
  //     polyfills.push(import('intersection-observer'))
  //   }

  //   return Promise.all(polyfills)
  // }

  // supportsIntersectionObserver = () => {
  //   return (
  //     'IntersectionObserver' in global &&
  //     'IntersectionObserverEntry' in global &&
  //     'intersectionRatio' in IntersectionObserverEntry.prototype
  //   )
  // }