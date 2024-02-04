import Image from 'next/image'

import styles from './PhotoLine.module.scss'

export default function PhotoLine({ pageData = {} }) {
  const { img } = pageData
  return (
    <div className={styles.module}>
      <div className={styles.photoLine}>
        <Image
          src={img?.src}
          fill
          priority
          style={{ objectFit: 'cover' }}
          alt={'PhotoLine'}
        />
      </div>
    </div>
  )
}
