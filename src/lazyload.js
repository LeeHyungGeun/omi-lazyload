const config = {}

let observer = new IntersectionObserver((entries, self) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.data.show = true
      self.unobserve(entry.target)
    }
  })
}, config)

export { observer }
