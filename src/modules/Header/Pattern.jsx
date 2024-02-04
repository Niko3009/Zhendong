import * as Cells from '@/shared/patterns/graphicCells'

import styles from './styles/Pattern.module.scss'

export default function Pattern() {
  const { RedCell, BlueCell, WhiteCell, DonutCell } = Cells
  return (
    <div className={styles.wrapper}>
      <div className={styles.graphicPattern}>
        <DonutCell centerColor={'red'} />
        <WhiteCell />
        <RedCell />
        <BlueCell />
        <WhiteCell />
        <WhiteCell />
        <RedCell />
        <BlueCell />
        <RedCell />
        <BlueCell />
        <WhiteCell />
        <DonutCell />
        <WhiteCell />
        <RedCell />
        <BlueCell />
        <WhiteCell />
        <RedCell />
        <WhiteCell />
        <BlueCell />
        <WhiteCell />
        <BlueCell />
        <WhiteCell />
        <RedCell />
        <WhiteCell />
        <RedCell />
      </div>
    </div>
  )
}
