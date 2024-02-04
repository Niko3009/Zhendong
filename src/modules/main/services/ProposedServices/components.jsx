'use client'

import classNames from 'classnames'
import routes from '@/global/routes'
import { useRedirect } from '@/hooks/useRedirect'

import Animation from '@/containers/Animation'
import SVG from '@/ui/SVG'
import Button from '@/ui/Button'
import ArrowIcon from '@/shared/icons/Arrow'

import styles from './ProposedServices.module.scss'

export function AllServices({ children }) {
  return <div className={styles.allServicesBox}>{children}</div>
}

export function Service({
  // id,
  children,
}) {
  const redirect = useRedirect()

  const href = routes.service('dostavka-kontejnernogo-oborudovaniya')

  return (
    <ServiceAnimation animation={'custom-shutter-ver-bottom'}>
      <ServiceAnimation animation={'custom-fade-in'}>
        <div className={styles.serviceBox} onClick={() => redirect(href)}>
          <Arrow />
          {children}
          <div className={styles.serviceBG} />
        </div>
      </ServiceAnimation>
    </ServiceAnimation>
  )
}

export function Icon({
  src,
  // formatRatio = '1to1'
}) {
  return (
    <div
      className={classNames(
        styles.icon
        // styles[`format` + formatRatio]
      )}
    >
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

function StyledButton({ children }) {
  const redirect = useRedirect()
  return (
    <div className={styles.buttonBox}>
      <ServiceAnimation animation={'custom-fade-in'}>
        <Button styleClass={'white'} onClick={() => redirect(routes.services)}>
          {children}
        </Button>
      </ServiceAnimation>
    </div>
  )
}
export { StyledButton as Button }

function Arrow() {
  return (
    <div className={styles.arrow}>
      <div className={styles.rotationWrapper}>
        <ArrowIcon styleClass={'white'} />
      </div>
    </div>
  )
}

function ServiceAnimation({ children, animation }) {
  return (
    <Animation
      duration={1000}
      animation={animation}
      anchorPlacement={'center-bottom'}
    >
      {children}
    </Animation>
  )
}
