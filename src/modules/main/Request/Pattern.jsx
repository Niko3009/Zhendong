import classNames from 'classnames'
import Animation from '@/containers/Animation'
import * as Cells from '@/shared/patterns/graphicCells'

import styles from './styles/Pattern.module.scss'
import { wrapper } from './styles/Request.module.scss'

export default function Pattern() {
  const { RedCell, BlueCell, WhiteCell } = Cells
  return (
    <div className={styles.wrapper}>
      <div className={styles.graphicPattern}>
        <CellAnimation delay={0}>
          <BlueCell />
        </CellAnimation>

        <CellAnimation delay={500}>
          <WhiteCell />
        </CellAnimation>

        <CellAnimation delay={500}>
          <WhiteCell />
        </CellAnimation>

        <CellAnimation delay={0}>
          <BlueCell />
        </CellAnimation>

        <CellAnimation delay={0}>
          <div
            className={classNames([
              styles.graphicCell,
              styles.donutCell,
              styles[`blueCell`],
            ])}
          >
            <CellAnimation delay={500}>
              <WhiteCell />
            </CellAnimation>
          </div>
        </CellAnimation>

        <RedCell />

        <RedCell />

        <CellAnimation delay={500}>
          <WhiteCell />
        </CellAnimation>
      </div>
    </div>
  )
}
export { Pattern }

function CellAnimation({ delay, children }) {
  return (
    <Animation
      delay={delay}
      duration={1500}
      animation={'custom-zoom-in'}
      anchorPlacement={'bottom-bottom'}
      anchor={`.${wrapper}`}
    >
      {children}
    </Animation>
  )
}
