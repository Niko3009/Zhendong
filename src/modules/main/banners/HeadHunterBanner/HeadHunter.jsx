import { Image, Text, Button } from './components'

import styles from './HeadHunter.module.scss'

import mock from '@/backend/modules/banner-hh'

export default function () {
  const { data: moduleData } = mock
  const { text, ['button-text']: buttonText, img } = moduleData
  return (
    <div className={styles.module}>
      <div className={styles.wrapper}>
        <div className={styles.innerBox}>
          <Image
            src={img?.src}
            style={{ objectFit: 'cover' }}
            alt="head-hunter"
          />
          <Text>{text}</Text>
          <Button>{buttonText}</Button>
        </div>
      </div>
    </div>
  )
}
