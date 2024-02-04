import styles from './bg.module.scss'

export default function BG() {
  return (
    <div className={styles.bg}>
      <div className={styles['red-square']}></div>
    </div>
  )
}
