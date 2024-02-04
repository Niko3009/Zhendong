'use client'

import { useEffect, useState, useCallback } from 'react'

export default function useDisableScroll(target) {
  const [isDisableScrolls, setDisableScrolls] = useState(false)

  const disableScrolls = useCallback((target, isDisableScroll = false) => {
    disableInnerScrolls(target, isDisableScroll)
    disableTargetScroll(target, isDisableScroll)
  }, [])

  const disableInnerScrolls = (target, isDisableScroll) => {
    target
      ?.querySelectorAll('div')
      .forEach((child) => disableTargetScroll(child, isDisableScroll))
  }

  const disableTargetScroll = (target, isDisableScroll) => {
    if (isDisableScroll) target.addEventListener('scroll', preventScroll, false)
    else target.removeEventListener('scroll', preventScroll, false)
  }

  const preventScroll = (event) => event.preventDefault()

  useEffect(() => {
    if (target) disableScrolls(target, isDisableScrolls)

    return () => {
      if (target) disableScrolls(target, false)
    }
  }, [isDisableScrolls, disableScrolls])

  return (isDisable) => setDisableScrolls(isDisable)
}
export { useDisableScroll }
