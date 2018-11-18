import { loadPolyfills } from './loadPolyfills'

const config = {}

const observer = () => {
  return new Promise((resolve) => {
    loadPolyfills().then(() => {
      resolve(new IntersectionObserver((entries, self) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.data.show = true
              self.unobserve(entry.target)
            }
          })
        }, config))
    })
  })
}

export { observer }