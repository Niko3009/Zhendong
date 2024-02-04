import Button from '@/ui/Button'
import SVG from '@/ui/SVG'

import styles from './styles/Proposal.module.scss'

export function Text({ src, children }) {
  return (
    <div className={styles.messageBox}>
      <div className={styles.icon}>
        <SVG {...{ src }} />
      </div>
      <div className={styles.textBox}>
        <h3>{children}</h3>
      </div>
    </div>
  )
}

function StyledButton({ children }) {
  return (
    <div className={styles.buttonBox}>
      <div className={styles.buttonLayout}>
        <div>
          <Button styleClass={'white'} hoverTransparencyStyle={true}>
            {children}
          </Button>
        </div>
      </div>
    </div>
  )
}
export { StyledButton as Button }
