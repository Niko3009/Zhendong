import * as Cells from '@/shared/patterns/graphicCells'

import styles from './About.module.scss'

export default function Pattern() {
  const { StripedCell } = Cells
  return (
    <div className={styles.graphicPattern}>
      <StripedCell firstColor={'blue'} secondColor={'red'} />
      <StripedCell firstColor={'red'} secondColor={'blue'} />
    </div>
  )
}
