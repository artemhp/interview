import { getAllCharacters } from './api'
import { renderCharacter } from './render'

const root = document.getElementById('app')

getAllCharacters(2)
  .then(({ info, results }) => {
    console.log('response', { info, results })
    results.forEach((character) => renderCharacter(root, character))
  })
  .catch((err) => console.error(err))
