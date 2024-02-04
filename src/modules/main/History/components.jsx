import { useState } from 'react'
import Image from 'next/image'
import Slider from '@/ui/Slider'
import Timeline from './Timeline'

import styles, { sliderSpaceBetween } from './styles/History.module.scss'

export function Title({ children }) {
  return (
    <div className={styles.titleBox}>
      <h2>{children}</h2>
    </div>
  )
}

export function HistorySlider({ dates, children }) {
  const [state, setState] = useState({ slide: 1, date: 2023 })
  const { slide, date } = state

  const updateDate = (newDate) => {
    const newSlide = dates.indexOf(newDate)
    setState({ slide: newSlide, date: dates[newSlide] })
  }
  const updateDateBySlide = (newSlide) => {
    setState({ slide: newSlide, date: dates[newSlide] })
  }

  const pureDates = [...dates]
  pureDates.shift()
  pureDates.pop()

  return (
    <div className={styles.historySliderBox}>
      <div className={styles.sliderBox}>
        <div className={styles.sliderSubBox}>
          <div className={styles.sliderContent}>
            <Slider
              slide={slide}
              slidesPerView={3}
              spaceBetween={sliderSpaceBetween}
              onSlideChange={updateDateBySlide}
              isMobilePaginationEnable={false}
              sliderButtonsClassName={styles.sliderButtonsClassName}
            >
              {children}
            </Slider>
          </div>
        </div>
      </div>

      <Timeline date={date} dates={pureDates} updateDate={updateDate} />
    </div>
  )
}

export function HistorySlide({ data }) {
  if (!data) return null

  const { img, date, dateEvent } = data

  return (
    <div className={styles.slideContent}>
      <div className={styles.imgBox}>
        {img && (
          <Image
            src={img?.src}
            fill
            priority
            style={{ objectFit: 'contain' }}
            alt={img?.src}
          />
        )}
      </div>

      <div className={styles.textBox}>
        <h2 className={styles.date}>{date}</h2>
        <p className={styles.dateEvent}>{dateEvent}</p>
      </div>
    </div>
  )
}
