import styles from './styles/ContainersMap.module.scss'

export function Title({ children }) {
  return (
    <div className={styles.titleBox}>
      <h2>{children}</h2>
    </div>
  )
}

export function MapBox({ children }) {
  return <div className={styles.mapBox}>{children}</div>
}
