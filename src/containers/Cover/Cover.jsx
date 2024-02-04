import classNames from 'classnames'

import styles, { hidingDuration } from './Cover.module.scss'

export default function Cover({ isHidden = false, children }) {
  return (
    <div
      className={classNames(styles.wrapper, {
        [styles.hidden]: isHidden,
      })}
    >
      {children}
    </div>
  )
}
export { Cover, hidingDuration }
