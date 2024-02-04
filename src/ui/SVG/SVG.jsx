import Image from 'next/image'
import classNames from 'classnames'

import styles from './SVG.module.scss'

export default function SVG({ src, alt = 'SVG', className = null }) {
  return (
    <div
      className={classNames(styles.wrapper, {
        [className]: !!className,
      })}
    >
      <Image
        src={src}
        fill
        priority
        style={{ objectFit: 'contain' }}
        alt={alt}
      />
    </div>
  )
}
export { SVG }
