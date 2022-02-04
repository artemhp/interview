export function renderCharacter(
  root,
  { id, name, status, species, type, image },
  handleClick
) {
  const card = createEl('div', {
    attrs: { 'data-id': `character-${id}`, class: 'character-card' }
  })

  card.onclick = ({ currentTarget }) => handleClick(id, currentTarget)

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

export function renderNavigation(root, page, info, prev, next) {
  const wrapper = createEl('div', { attrs: { class: 'page-wrapper' } })

  const prevPage = createEl('div', {
    attrs: { class: 'page-prev' },
    text: 'Prev Page'
  })

  if (!info.prev) {
    prevPage.style.visibility = 'hidden'
  }
  prevPage.onclick = prev

  const nextPage = createEl('div', {
    attrs: { class: 'page-next' },
    text: 'Next Page'
  })

  if (!info.next) {
    nextPage.style.visibility = 'hidden'
  }
  nextPage.onclick = next

  wrapper.appendChild(prevPage)
  wrapper.appendChild(nextPage)

  root.appendChild(wrapper)
}

export function createEl(type, { attrs, text } = {}) {
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
