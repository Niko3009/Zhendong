import styles from './Heading.module.scss'

export default function Heading({ pageData = {} }) {
  const { title, description } = pageData
  return (
    <div className={styles.module}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.titleBox}>
            <h1>{title || 'Title'}</h1>
            {!!description && <p>{description}</p>}
          </div>
        </div>
      </div>
    </div>
  )
}
export { Heading }
