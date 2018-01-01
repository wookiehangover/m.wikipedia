
~(function() {
  const host = location.host
  const localeRegex = /^([a-z]{2})\.wikipedia\.org$/
  const isDesktop = localeRegex.test(host)
  const isMobile = host.includes('.m.wikipedia.org')
  const wantsDesktop = location.search.includes('desktop')

  if (isDesktop && wantsDesktop === false){
    location.host = host.replace(localeRegex, '$1.m.wikipedia.org')
  } else if (isMobile && wantsDesktop) {
    location.host = host.replace('.m.', '.')
  }

})()
