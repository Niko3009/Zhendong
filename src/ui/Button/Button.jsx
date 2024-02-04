'use client'

import classNames from 'classnames'

import styles from './styles/Button.module.scss'

export default function Button({
  children = 'button',
  styleClass = 'white',
  onClick = () => {},
  className = null,
  checkboxButton = false,
  hoverTransparencyStyle = false,
}) {
  return (
    <button
      className={classNames(styles.button, styles[styleClass], {
        [styles.hoverTransparencyStyle]: !!hoverTransparencyStyle,
        [styles.checkboxButton]: !!checkboxButton,
        [className]: !!className,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
export { Button }
