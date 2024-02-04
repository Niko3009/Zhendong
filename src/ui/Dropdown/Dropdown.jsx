'use client'

import classNames from 'classnames'
import { IoIosArrowForward } from 'react-icons/io'
import { useState, useRef, useCallback, useEffect } from 'react'
import { useClickInside } from '@/hooks/useClickInside'

import styles from './Dropdown.module.scss'

export default function Dropdown({
  name,
  placeholder = '',
  styleClass = false,
  children = [],
}) {
  const [isActive, setActive] = useState(false)
  const [dropdown, setDropdown] = useState(null)
  const ref = useRef(null)

  const closeDropdown = useCallback(() => setActive(false), [])
  useClickInside(dropdown, closeDropdown)

  useEffect(() => {
    setDropdown(ref.current)
  }, [])

  return (
    <div
      name={name}
      className={classNames(styles.wrapper, {
        [styles[styleClass]]: !!styleClass,
        [styles.inactive]: !isActive,
      })}
      ref={ref}
    >
      <div className={styles.content}>
        <PlaceholderSelect {...{ placeholder, setActive, isActive }} />

        <div className={styles.list}>
          {children.map((child, i) => (
            <div className={styles.item} key={i}>
              {child}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export { Dropdown }

function PlaceholderSelect({ placeholder, setActive, isActive }) {
  return (
    <div onClick={() => setActive(!isActive)} className={styles.placeholder}>
      <select value={''} disabled>
        <option value={''} hidden>
          {placeholder}
        </option>
      </select>
      <div className={styles.placeholderCover}>
        <IoIosArrowForward className={classNames(styles.placeholderArrow)} />
      </div>
    </div>
  )
}
