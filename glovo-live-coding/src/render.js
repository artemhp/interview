export function renderCharacter(
  root,
  { id, name, status, species, type, image }
) {
  const card = createEl('div', {
    attrs: { 'data-id': `character-${id}`, class: 'character-card' }
  })

  const img = createEl('img', {
    attrs: { class: 'character-pic', src: image }
  })
  card.appendChild(img)

  const rightCol = createEl('div')
  card.appendChild(rightCol)

  const header = createEl('h2', { text: name })
  rightCol.appendChild(header)

  const info = createEl('p', { text: `${species} | ${type} | ${status}` })
  rightCol.appendChild(info)

  root.appendChild(card)
}

function createEl(type, { attrs, text } = {}) {
  const element = document.createElement(type)

  if (attrs) {
    Object.entries(attrs).forEach(([name, value]) =>
      element.setAttribute(name, value)
    )
  }

  if (text) {
    element.innerText = text
  }

  return element
}
