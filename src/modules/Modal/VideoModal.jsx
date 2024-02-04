import CrossIcon from '@/shared/icons/Cross'

import styles from './styles/VideoModal.module.scss'

export default function VideoModal({ closeModal, children }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.window}>
        <div className={styles.content}>{children}</div>
      </div>
      <div className={styles.closeButtonBox} onClick={() => closeModal()}>
        <CrossIcon className={styles.closeIcon} />
      </div>
    </div>
  )
}
export { VideoModal }
