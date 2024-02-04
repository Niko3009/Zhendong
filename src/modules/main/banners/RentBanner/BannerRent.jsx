import { Image, Text, Button } from './components'

import styles from './Rent.module.scss'

import mock from '@/backend/modules/banner-rent'

export default function BannerRent() {
  const { data: moduleData } = mock

  const { text, ['button-text']: buttonText, img } = moduleData
  return (
    <div className={styles.upperBanner}>
      <div className={styles.module}>
        <div className={styles.wrapper}>
          <div className={styles.innerBox}>
            <Image
              src={img?.src || '#'}
              style={{ objectFit: 'cover' }}
              alt={'rent-banner'}
            />
            <Text>{text}</Text>
            <Button>{buttonText}</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
export { BannerRent }
