import Image from 'next/image'
import Slider from '@/ui/Slider'
import Animation from '@/containers/Animation'

import styles from './HeroSection.module.scss'

import mock from '@/backend/modules/hero-section'
// import data from './data.json'

export default function HeroSection() {
  const { data } = mock
  const { title, description, ['slider-data']: sliderData } = data
  const { slides } = sliderData
  return (
    <div className={styles.module}>
      <div className={styles.wrapper}>
        <Animation
          delay={500}
          duration={1000}
          animation={'custom-shutter-ver-bottom'}
          anchor={`body`}
          anchorPlacement={'top-center'}
        >
          <div className={styles.content}>
            <div className={styles.titleBox}>
              <h1>{title}</h1>
              <p>{description}</p>
            </div>

            <div className={styles.sliderBox}>
              <Slider sliderButtonsClassName={styles.sliderButtons}>
                {slides.map((data, i) => (
                  <Slide {...{ data }} key={i} />
                ))}
              </Slider>
            </div>
          </div>
        </Animation>
      </div>
    </div>
  )
}
export { HeroSection }

export function Slide({ data }) {
  const { img } = data
  return (
    <Image
      src={img?.src}
      fill
      priority
      style={{ objectFit: 'cover' }}
      alt={`slide-${img?.src}`}
    />
  )
}
