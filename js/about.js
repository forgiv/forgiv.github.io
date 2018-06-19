const data = {
  interests: ['video games', 'anime', 'logic puzzles'],
  summary:
    "I first started with development back in high school; I took a web development class that got me introduced to HTML and JavaScript. Since then, I've been hooked. A combination of genuine curiosity and a do-it-yourself nature led me to learn more about development. Fast forward to the present and that same combination is still the driving force that pushes me to seek out knowledge and gain experience.",
  status:
    "I'm a student attending Thinkful's Engineering Immersion course, learning full-stack web development."
}

document.addEventListener('DOMContentLoaded', () => {
  let i = 0
  const compiledData = `
    <h2>WHAT I'M INTO</h2>
    <p>I'm into... <span id="interest">${data.interests[i]}</span></p>
    <h2>WHAT I'M ALL ABOUT</h2>
    <p>${data.summary}</p>
    <h2>WHAT I'M UP TO</h2>
    <p>${data.status}</p>
  `
  document.getElementById('about').innerHTML = compiledData
  setInterval(() => {
    i = (i + 1) % data.interests.length
    document.getElementById('interest').innerHTML = data.interests[i]
  }, 1500)
})
