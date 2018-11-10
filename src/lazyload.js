const config = {
};

let observer = new IntersectionObserver(function (entries, self) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.data.src = entry.target.data['data-src'];
      self.unobserve(entry.target);
    }
  });
}, config);

export {
  observer
}