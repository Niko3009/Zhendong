import FixedNav from './FixedNav'
import DroppedNav from './DroppedNav'
import { Logo } from './components'

import styles from './styles/Header.module.scss'

export default function () {
  return (
    <div className={styles.module}>
      <header className={styles.wrapper}>
        <div className={styles.content}>
          <Logo />
          <Nav />
        </div>
      </header>
    </div>
  )
}

function Nav() {
  return (
    <>
      <FixedNav />
      <DroppedNav />
    </>
  )
}
