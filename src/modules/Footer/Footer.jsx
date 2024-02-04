import CopyrightIcon from './CopyrightIcon'

import styles from './footer.module.scss'

export default function () {
  return (
    <div className={styles.module}>
      <footer className={styles.wrapper}>
        <div className={styles.leftBox}>
          <p>© 2023 Zhendong</p>
          <p>Пользовательское соглашение</p>
        </div>

        <div className={styles.rightBox}>
          <div className={styles.copyrightIcon}>
            <a href="https://rosogroup.ru" rel="nofollow" target="_blank">
              <CopyrightIcon />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
