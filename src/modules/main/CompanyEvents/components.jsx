'use client'

import Image from 'next/image'
import Slider from '@/ui/Slider'
import routes from '@/global/routes'
import { useRedirect } from '@/hooks/useRedirect'
import useMediaQuery from '@/hooks/useMediaQuery'

import styles from './styles/CompanyEvents.module.scss'

export function Title({ children }) {
  return (
    <div className={styles.titleBox}>
      <h2>{children}</h2>
    </div>
  )
}

function EventSlider({ children }) {
  const isTabletMode = useMediaQuery('tablet')
  const isDesktopMode = useMediaQuery('desktop')
  const slidesPerView = isDesktopMode ? 3 : isTabletMode ? 2 : 1
  return (
    <div className={styles.sliderBox}>
      <Slider
        slidesPerView={slidesPerView}
        spaceBetween={24}
        sliderButtonsClassName={styles.sliderButtons}
      >
        {children}
      </Slider>
    </div>
  )
}
export { EventSlider as Slider }

export function Slide({ data }) {
  const { ['event-description']: description, img, date } = data
  const redirect = useRedirect()
  return (
    <div
      className={styles.slideContent}
      onClick={() => redirect(routes.article('event'))}
    >
      <div className={styles.imgBox}>
        <p className={styles.date}>{date}</p>
        <div className={styles.img}>
          <Image
            src={img?.src}
            fill
            priority
            style={{ objectFit: 'cover' }}
            alt={'slide-' + date}
          />
        </div>
      </div>
      <p className={styles.dateEvent}>{description}</p>
    </div>
  )
}
