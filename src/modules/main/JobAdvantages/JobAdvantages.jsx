import SVG from '@/ui/SVG'
import BG from './BG'

import styles from './Advantages.module.scss'

import mock from '@/backend/modules/job-advantages'

export default function Advantages() {
  const { data } = mock

  const { list } = data

  return (
    <div className={styles.module}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h2>Преимущества работы в компании</h2>
          <div className={styles.advantagesBox}>
            {list.map((data, i) => (
              <Item {...{ data }} key={i} />
            ))}
          </div>
        </div>

        <BG />
      </div>
    </div>
  )
}

function Item({ data }) {
  return (
    <div className={styles.advantageBox}>
      <Icon src={data.img.src} />

      <div className={styles.advantageText}>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
      </div>
    </div>
  )
}

function Icon({ src }) {
  return (
    <div className={styles.serviceIcon}>
      <SVG src={src} />
    </div>
  )
}
