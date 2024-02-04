import Button from '@/ui/Button'
import Arrow from '@/shared/icons/Arrow'

import styles from './AllVacancies.module.scss'

export function Career({ children }) {
  return (
    <div className={styles.careerBox}>
      <div className={styles.careerData}>{children}</div>
      <ArrowIcon />
    </div>
  )
}

function StyledButton({ children }) {
  return (
    <div className={styles.buttonBox}>
      <Button styleClass={'grey'}>{children}</Button>
    </div>
  )
}
export { StyledButton as Button }

function ArrowIcon() {
  return (
    <div className={styles.arrowBox}>
      <Arrow styleClass={'blue'} className={styles.arrow} />
    </div>
  )
}
export { ArrowIcon as Arrow }
