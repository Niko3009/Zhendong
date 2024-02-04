import StyledButton from '@/ui/Button'
import SVG from '@/ui/SVG'

import styles from './Requisites.module.scss'

export function Text({ children }) {
  return (
    <div className={styles.messageBox}>
      <div className={styles.icon}>
        <SVG src={'/svg/special/file.svg'} />
      </div>
      <div className={styles.textBox}>
        <h3>{children}</h3>
      </div>
    </div>
  )
}

export function Buttons() {
  return (
    <div className={styles.buttonBox}>
      <div className={styles.buttonLayout}>
        <StyledButton styleClass={'white'} hoverTransparencyStyle={true}>
          Реквизиты
        </StyledButton>
        <StyledButton styleClass={'white'} hoverTransparencyStyle={true}>
          Лицензия
        </StyledButton>
      </div>
    </div>
  )
}
