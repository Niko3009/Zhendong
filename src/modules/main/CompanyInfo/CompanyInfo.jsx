import Image from 'next/image'

import styles from './CompanyInfo.module.scss'

import mock from '@/backend/modules/company-info'

export default function () {
  const { data } = mock
  const { ['text-1']: text1, ['text-2']: text2, img } = data

  return (
    <div className={styles.module}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.upperTextBox}>
            {text1.map((string, i) => (
              <p key={i}>{string}</p>
            ))}
          </div>

          <div className={styles.imgBox}>
            <div className={styles.img}>
              <Image
                src={img?.src}
                fill
                priority
                style={{ objectFit: 'cover' }}
                alt={'company-info'}
              />
            </div>
          </div>

          <div className={styles.lowerTextBox}>
            {text2.map((string, i) => (
              <p key={i}>{string}</p>
            ))}
          </div>

          <WhiteSqure />
        </div>
      </div>
    </div>
  )
}

function WhiteSqure() {
  return (
    <div className={styles.whiteSqureBox}>
      <div className={styles.whiteSqure} />
    </div>
  )
}
