import styles from './styles/SwipeModal.module.scss'

export default function SwipeModal({ closeModal, children }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.window}>
        <div className={styles.tap} onClick={() => closeModal()} />

        <div className={styles.scrollWrapper}>
          <div className={styles.content}>{children}</div>
        </div>
      </div>
    </div>
  )
}
export { SwipeModal }
