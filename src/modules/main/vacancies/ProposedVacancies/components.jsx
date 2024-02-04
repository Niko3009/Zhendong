'use client'

import StyledButton from '@/ui/Button'
import LinkArrow from '@/shared/icons/Arrow'
import routes from '@/global/routes'
import { useRedirect } from '@/hooks/useRedirect'

import styles from './ProposedVacancies.module.scss'

export function Career({ children }) {
  return (
    <div className={styles.careerBox}>
      <div className={styles.careerData}>{children}</div>
      <Arrow />
    </div>
  )
}

export function Button({ children }) {
  const redirect = useRedirect()
  return (
    <div className={styles.buttonBox}>
      <StyledButton
        styleClass={'grey'}
        onClick={() => redirect(routes.vacancies)}
      >
        {children}
      </StyledButton>
    </div>
  )
}

export function Arrow() {
  return (
    <div className={styles.arrowBox}>
      <LinkArrow styleClass={'blue'} className={styles.arrow} />
    </div>
  )
}
