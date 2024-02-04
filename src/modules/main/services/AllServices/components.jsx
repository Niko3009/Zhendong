'use client'

import classNames from 'classnames'
import routes from '@/global/routes'
import { useRedirect } from '@/hooks/useRedirect'

import LinkArrow from '@/shared/icons/Arrow'
import SVG from '@/ui/SVG'

import styles from './AllServices.module.scss'

export function AllServices({ children }) {
  return <div className={styles.allServicesBox}>{children}</div>
}

export function Service({ children }) {
  const redirect = useRedirect()
  const href = routes.service('dostavka-kontejnernogo-oborudovaniya')
  return (
    <div className={styles.serviceBox} onClick={() => redirect(href)}>
      <ServiceArrow />
      {children}
      <div className={styles.serviceBG} />
    </div>
  )
}

export function Icon({ src, formatRatio = '1to1' }) {
  return (
    <div className={classNames(styles.icon, styles[`format` + formatRatio])}>
      <SVG src={src} />
    </div>
  )
}

export function Text({ children }) {
  return (
    <div className={styles.serviceNameBox}>
      <p className={styles.serviceName}>{children}</p>
      <div className={styles.serviceNameLine} />
    </div>
  )
}

function ServiceArrow() {
  return (
    <div className={styles.arrow}>
      <div className={styles.rotationWrapper}>
        <LinkArrow styleClass={'white'} />
      </div>
    </div>
  )
}
