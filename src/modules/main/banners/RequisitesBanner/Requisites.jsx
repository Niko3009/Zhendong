import { Text, Buttons } from './components'

import styles from './Requisites.module.scss'

// import mock from '@/backend/modules/banner-requisites'

export default function Requisites() {
  // const { data } = mock
  return (
    <div className={styles.module}>
      <div className={styles.wrapper}>
        <div className={styles.innerBox}>
          <Text>Реквизиты</Text>
          <Buttons />
        </div>
      </div>
    </div>
  )
}
export { Requisites }
