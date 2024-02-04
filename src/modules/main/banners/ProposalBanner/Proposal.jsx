import { Text, Button } from './components'

import styles from './styles/Proposal.module.scss'

import mock from '@/backend/modules/banner-proposal'

export default function Proposal() {
  const { data: moduleData } = mock

  const { text, ['button-text']: buttonText, img } = moduleData
  return (
    <div className={styles.module}>
      <div className={styles.wrapper}>
        <div className={styles.innerBox}>
          <Text src={img?.src || '#'}>{text}</Text>
          <Button>{buttonText}</Button>
        </div>
      </div>
    </div>
  )
}
export { Proposal }
