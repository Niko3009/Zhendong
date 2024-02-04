import Animation from '@/containers/Animation'
import { Item, NumCell, Reason } from './components'

import styles from './styles/Reasons.module.scss'

import mock from '@/backend/modules/reasons'

export default function Reasons() {
  const { data } = mock

  const { list } = data

  return (
    <div className={styles.module}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.titleBox}>
            <h2>Причины выбрать нас</h2>
          </div>

          <Animation
            duration={1000}
            animation={'slide-in-right'}
            anchor={`.${styles.wrapper}`}
            anchorPlacement={'bottom-bottom'}
          >
            <Content {...{ list }} />
          </Animation>
        </div>
      </div>
    </div>
  )
}
export { Reasons }

function Content({ list }) {
  return (
    <div className={styles.mainContent}>
      <div className={styles.middleLine} />

      <div className={styles.scrolled}>
        <div className={styles.reasonItems}>
          {list.map((data, i) => {
            const num = i + 1

            const baseAnimDelay = 1000
            const stepAnimDelay = 600
            const animDelay =
              num <= 4 ? baseAnimDelay + (num - 1) * stepAnimDelay : 0

            const cellNumber = String(num >= 10 ? num : '0' + num)

            const { text } = data

            return (
              <Item key={i}>
                <NumCell {...{ animDelay }}>{cellNumber}</NumCell>
                <Reason {...{ animDelay }}>{text}</Reason>
              </Item>
            )
          })}
        </div>
      </div>
    </div>
  )
}
