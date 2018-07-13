const data = [
  {
    name: 'Bloggy',
    source: 'https://github.com/forgiv/bloggy-client',
    live: 'https://forgiv.github.io/bloggy/',
    description:
      'Bloggy is an open-source, centralized, blogging platform. Bloggy allows users to write posts using the powerful markdown language.'
  },
  {
    name: 'Spanish Flash',
    source: 'https://github.com/forgiv/spacedRepetition-client',
    live: 'https://forgiv.github.io/spacedRepetition-client',
    description: 'Spanish Flash is a web app for helping one learn Spanish words. It uses the spaced repetition algorithm to achieve this. The app is designed to be modular with the content and can be easily modified to work with other languages by simply modifying the questions collection in ones database.'
  }
]

document.addEventListener('DOMContentLoaded', () => {
  const compiledData = []
  for (const project of data) {
    compiledData.push('<article class="Project">')
    compiledData.push(`<header><h2>${project.name}</h2></header>`)
    compiledData.push(`<p>${project.description}</p>`)
    compiledData.push('<footer>')
    compiledData.push(`<a href="${project.source}" target="_blank">Source</a>`)
    if (project.live) {
      compiledData.push(' | ')
      compiledData.push(`<a href="${project.live}" target="_blank">Live</a>`)
    }
    compiledData.push('</footer>')
    compiledData.push('</article>')
  }
  document.getElementsByClassName('Portfolio')[0].innerHTML = compiledData.join(
    ''
  )
})
