import CrossIcon from '@/shared/icons/Cross'

import styles from './styles/WindowModal.module.scss'

export default function WindowModal({ closeModal, children }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.closeButtonBox} onClick={() => closeModal()}>
        <CrossIcon className={styles.closeIcon} />
      </div>

      <div className={styles.window}>
        <div className={styles.scrollWrapper}>
          <div className={styles.content}>{children}</div>
        </div>
      </div>
    </div>
  )
}
export { WindowModal }
