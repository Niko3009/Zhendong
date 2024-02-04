import { Title, Achievement } from './components'

import styles from './styles/Achievements.module.scss'

import mock from '@/backend/modules/achievements'

export default function Achievements() {
  const { data } = mock

  const { list } = data

  return (
    <div className={styles.module}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <Title>15 лет успешной работы</Title>
          <List {...{ list }} />
        </div>
      </div>
    </div>
  )
}
export { Achievements }

export function List({ list }) {
  return (
    <div className={styles.achievementsBox}>
      {list.map((data, i) => (
        <Item {...{ data }} num={i + 1} key={i} />
      ))}
    </div>
  )
}

export function Item({ data, num }) {
  const { value, text } = data
  return <Achievement {...{ value, num }}>{text}</Achievement>
}
