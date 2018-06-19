const data = [
  { name: 'email', link: 'hiram0101@gmail.com' },
  { name: 'github', link: 'https://github.com/forgiv' },
  { name: 'linkedin', link: 'https://linkedin.com/in/forgiv01' }
]

document.addEventListener('DOMContentLoaded', () => {
  const compiledData = ['<ul>']
  for (const link of data) {
    compiledData.push('<li>')
    if (link.name === 'email') {
      compiledData.push(`<a href="mailto:${link.link}">${link.link}</a>`)
    } else {
      compiledData.push(
        `<a href="${link.link}" target="_blank">${link.name}</a>`
      )
    }
    compiledData.push('</li>')
  }
  compiledData.push('</ul>')
  document.getElementById('contact').innerHTML = compiledData.join('')
})
