
~(function() {
  const host = location.host
  const isMobile = /([a-z]+)\.wikipedia\.org/
  if (isMobile.test(host)) {
    location.host = host.replace(isMobile, '$1.m.wikipedia.org')
  }
})()
