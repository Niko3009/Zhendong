'use client'

import AOS from 'aos'
import 'aos/dist/aos.css'
import classNames from 'classnames'
import { useContext, useEffect } from 'react'
import useMediaQuery from '@/hooks/useMediaQuery'
import Context, { Provider } from './Context'

import styles from './Animation.module.scss'

import '@/global/animations.scss'

export default function Animation({
  children,
  animation,
  disable = false,
  delay = 0,
  duration = 1000,
  anchor = null,
  anchorPlacement = null,
}) {
  const options = useContext(Context)?.animation?.options
  const isCommonDisable = options?.disable

  return (
    <AnimationWrapper
      {...{ animation, delay, duration, anchor, anchorPlacement }}
      disable={disable || isCommonDisable}
    >
      {children}
    </AnimationWrapper>
  )
}
export { Animation }

export function AnimationObserver({
  children,
  isDisable = false,
  once = false,
}) {
  const isDesktopMode = useMediaQuery('desktop')
  const isCommonDisable = isDisable || !isDesktopMode

  useEffect(() => {
    AOS.init({ once, disable: isCommonDisable })
    const refresh = () => AOS.refresh()
    const target = document.body
    target
      .querySelectorAll('div')
      .forEach((div) => div.addEventListener('scroll', refresh, false))
  }, [])

  return (
    <Provider
      value={{ animation: { isDisable: isCommonDisable } }}
      {...{ Context }}
    >
      {children}
    </Provider>
  )
}

export { Context }

export function AnimationWrapper({
  animation,
  delay,
  duration,
  anchor,
  anchorPlacement,
  // disable,
  children,
}) {
  return (
    <div
      className={classNames(styles.wrapper)}
      data-aos={animation}
      data-aos-delay={delay}
      data-aos-duration={duration}
      data-aos-anchor={anchor}
      data-aos-anchor-placement={anchorPlacement}
      suppressHydrationWarning
    >
      {children}
    </div>
  )
}
