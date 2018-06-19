const data = [
  {
    name: 'Bloggy Client',
    source: 'https://github.com/forgiv/bloggy-client',
    live: 'https://ecstatic-mccarthy-2190d4.netlify.com/',
    description:
      'This is the client package for Bloggy. Bloggy is an open-source, centralized, blogging platform. Bloggy allows users to write posts using the powerful markdown language.'
  },
  {
    name: 'Bloggy Server',
    source: 'https://github.com/forgiv/bloggy-server',
    description:
      'This is the server package for Bloggy. Bloggy is an open-source, centralized, blogging platform. Bloggy allows users to write posts using the powerful markdown language.'
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
