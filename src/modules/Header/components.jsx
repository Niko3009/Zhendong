'use client'

import SVG from '@/ui/SVG'
import routes from '@/global/routes'
import useRedirect from '@/hooks/useRedirect'

import styles from './styles/Header.module.scss'

export function Logo() {
  const redirect = useRedirect()
  return (
    <div className={styles.logoBox}>
      <div className={styles.logo} onClick={() => redirect(routes.homepage)}>
        <SVG src={'/svg/logo.svg'} />
      </div>
    </div>
  )
}
