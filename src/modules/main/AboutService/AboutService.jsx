import styles from './AboutService.module.scss'

export default function AboutService({ pageData = {} }) {
  const { text } = pageData
  return (
    <div className={styles.module}>
      <div className={styles.wrapper}>
        <h2>Об услуге</h2>
        <div className={styles.about}>
          {text.map((string, i) => (
            <p key={i}>{string}</p>
          ))}
        </div>
      </div>
    </div>
  )
}
export { AboutService }
