'use client'

import 'swiper/css'
import 'swiper/css/bundle'
import classNames from 'classnames'
import { useState, useEffect } from 'react'

import { Swiper, SwiperSlide as Slide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import SliderButtons from './SliderButtons'

import './styles/Slider.scss'
import styles from './styles/Slider.module.scss'

export default function Slider({
  children,
  slide,
  onSlideChange = () => {},
  //
  slidesPerView = 1,
  spaceBetween = 0,
  loop = false,
  className = styles['default-slider-name'],
  sliderButtonsClassName = styles['default-slider-buttons-name'],
  //
  isDesktopPaginationEnable = true,
  isMobilePaginationEnable = true,
}) {
  const [slider, setSlider] = useState(null)
  const [controlledSlide, setControlledSlide] = useState(1)
  const swiperSlide = slide !== undefined ? slide : controlledSlide

  useEffect(() => {
    slider?.slideTo(swiperSlide - 1)
  })

  return (
    <div className={styles.wrapper}>
      <Swiper
        className={classNames(styles.slider, {
          ['swiper-mobile-pagination-disable']: !isMobilePaginationEnable,
          [className]: !!className,
        })}
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        {...{ slidesPerView, spaceBetween, loop }}
        // navigation={{ prevEl, nextEl }}
        // autoplay={{ delay: autoplay }}
        onInit={(swiper) => setSlider(swiper)}
        onSlideChange={(swiper) => {
          onSlideChange(swiper.activeIndex + 1)
          setControlledSlide(swiper.activeIndex + 1)
        }}
      >
        {children.map((slideContent, i) => (
          <Slide key={i}>{slideContent}</Slide>
        ))}
      </Swiper>

      <SliderButtons
        className={classNames(styles['slider-buttons'], {
          [sliderButtonsClassName]: !!sliderButtonsClassName,
        })}
        {...{ slider, isDesktopPaginationEnable }}
      />
    </div>
  )
}
export { Slider }
