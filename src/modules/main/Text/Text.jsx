import {
  Div,
  H1,
  H2,
  H3,
  H4,
  P,
  Link,
  Buttons,
  Button,
  UL,
  OL,
  LI,
  Slider,
  Table,
} from './components'

import styles from './Text.module.scss'

export default function Text({ pageData }) {
  const { content } = pageData

  const elements = {
    block: Div,
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    string: P,
    link: Link,
    buttons: Buttons,
    button: Button,
    list: UL,
    'ordered-list': OL,
    'list-item': LI,
    slider: Slider,
    table: Table,
  }

  const getElement = ({ data = {}, key = 1 }) => {
    if (typeof data === 'string') return data
    if (typeof data !== 'object' || data === null) return null

    const { item, params, content } = data
    const Element = elements[item]
    if (!Element) return null

    return (
      <Element {...{ params }} key={key}>
        {getChildren(content)}
      </Element>
    )
  }

  const getChildren = (content) => {
    if (Array.isArray(content)) {
      return content.map((item, i) => getElement({ data: item, key: i }))
    } else if (typeof content === 'object' && content !== null) {
      return getElement({ data: content })
    } else if (typeof content === 'string') {
      return content
    } else {
      return ''
    }
  }

  return (
    <div className={styles.module}>
      <div className={styles.wrapper}>
        <div className={styles.content}>{getChildren(content)}</div>
      </div>
    </div>
  )
}
export { Text }
