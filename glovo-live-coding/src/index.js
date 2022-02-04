import { getAllCharacters, getCharacter } from './api'
import { renderCharacter, renderNavigation } from './render'

const root = document.getElementById('app')

const url = new URL(window.location.href)
const [category, page] = url.pathname.substring(1).split('/')

let initialPage = 1
if (category === 'list' && page) {
  initialPage = +page
}

function rerenderUI(initialPage) {
  renderList(initialPage)
  history.pushState({}, null, `/list/${initialPage}`)
}

function renderList(initialPage) {
  getAllCharacters(initialPage)
    .then(({ info, results }) => {
      root.innerHTML = ''
      renderNavigation(
        root,
        page,
        info,
        () => rerenderUI(--initialPage),
        () => rerenderUI(++initialPage)
      )
      console.log('response', { info, results })
      results.forEach((character) =>
        renderCharacter(root, character, (id, target) => {
          getCharacter(id).then((el) => console.log(el))
          target.style.background = 'red'
          console.log(target)
          target.setAttribute('data-state', 'open')
        })
      )
    })
    .catch((err) => console.error(err))
}

renderList(initialPage)
