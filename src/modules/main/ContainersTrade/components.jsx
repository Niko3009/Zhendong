import Button from '@/ui/Button'
import SVG from '@/ui/SVG'

import styles from './styles/ContainersTrade.module.scss'

export function Icon({ src }) {
  return (
    <div className={styles.buttonIcon}>
      <SVG src={src} />
    </div>
  )
}

export function TradeModeButton({ name, control, children }) {
  const { isActiveMode, updateTradeMode } = control
  return (
    <Button
      styleClass={isActiveMode(name) ? 'blue' : 'grey'}
      className={styles.tradeModeButton}
      onClick={() => updateTradeMode(name)}
      checkboxButton={true}
    >
      {children}
    </Button>
  )
}

export function FiltersPanelButton({ setModalOpen, children }) {
  return (
    <Button styleClass={'grey'} onClick={() => setModalOpen(true)}>
      {children}
    </Button>
  )
}
