'use client'

import { Title, HistorySlider, HistorySlide } from './components'
import { BG } from './BG'

import styles from './styles/History.module.scss'

import mock from '@/backend/modules/company-history'

export default function History() {
  const { data } = mock
  const slides = [...data.slides]

  slides.unshift(null)
  slides.push(null)
  const dates = slides.map((item) => (item ? item.date : null))

  return (
    <div className={styles.module}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <Title>История Zhendong</Title>

          <HistorySlider dates={dates}>
            {slides.map((data, i) => (
              <HistorySlide {...{ data }} key={i} />
            ))}
          </HistorySlider>
        </div>

        <BG />
      </div>
    </div>
  )
}
export { History }
