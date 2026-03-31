(function () {
  var DARK_BG  = '#0d1219'
  var LIGHT_BG = '#f7f8fa'
  try {
    var isDark = localStorage.getItem('theme') === 'dark' ||
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
    if (isDark) document.documentElement.classList.add('dark')
    document.documentElement.style.colorScheme = isDark ? 'dark' : 'light'
    var meta = document.querySelector('meta[name="theme-color"]')
    if (meta) meta.setAttribute('content', isDark ? DARK_BG : LIGHT_BG)
  } catch {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark')
    }
  }
})()
