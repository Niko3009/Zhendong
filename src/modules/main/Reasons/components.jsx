import Dot from '@/shared/icons/Dot'
import Animation from '@/containers/Animation'

import styles from './styles/Reasons.module.scss'

export function Item({ children }) {
  return <div className={styles.reasonItem}>{children}</div>
}

export function NumCell({ children, animDelay = 1000 }) {
  return (
    <div className={styles.numBox}>
      <div className={styles.numCell}>
        <Animation
          duration={1000}
          delay={animDelay}
          animation={'custom-fade-in-bottom'}
          anchor={`.${styles.wrapper}`}
          anchorPlacement={'bottom-bottom'}
        >
          <div className={styles.cellContent}>
            <p>{children}</p>
          </div>
        </Animation>
      </div>
    </div>
  )
}

export function Reason({ children, animDelay = 1000 }) {
  return (
    <div className={styles.reasonBox}>
      <Animation
        duration={1000}
        delay={animDelay}
        animation={'custom-shutter-ver-top'}
        anchor={`.${styles.wrapper}`}
        anchorPlacement={'bottom-bottom'}
      >
        <div className={styles.reasonContent}>
          <DottedLine />
          <div className={styles.reasonText}>
            <p>{children}</p>
          </div>
        </div>
      </Animation>
    </div>
  )
}

function DottedLine() {
  const lineLength = 360
  const dotSize = 10
  const dotsNum = Math.round(lineLength / dotSize)
  const dots = [...new Array(dotsNum)].map((item, i) => (
    <div className={styles.dottedLineDot} key={i}>
      <Dot className={styles.icon} />
    </div>
  ))
  return <div className={styles.dottedLine}>{dots}</div>
}
