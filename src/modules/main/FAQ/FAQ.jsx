import { Item, Question, Answer } from './components'
import Pattern from './Pattern'

import styles from './styles/FAQ.module.scss'

export default function FAQ({ pageData = {} }) {
  const { list } = pageData
  return (
    <div className={styles.module}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.titleBox}>
            <h2>Частые вопросы</h2>
          </div>

          <div className={styles.listBox}>
            {list.map((item, i) => (
              <Item initActive={false} key={i}>
                <Question>{item.question}</Question>
                <Answer>{item.answer}</Answer>
              </Item>
            ))}
          </div>

          <Pattern />
        </div>
      </div>
    </div>
  )
}
export { FAQ }
