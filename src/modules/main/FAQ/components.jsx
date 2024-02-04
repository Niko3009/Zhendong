'use client'

import classNames from 'classnames'
import { createContext, useContext, useState } from 'react'
import Plus from '@/shared/icons/Plus'
import Minus from '@/shared/icons/Minus'

import styles from './styles/FAQ.module.scss'

export function Item({ children, initActive = false }) {
  const [isActive, setActive] = useState(initActive)
  return (
    <div
      className={classNames(styles.itemBox, {
        [styles.active]: isActive,
      })}
    >
      <ItemContext.Provider value={{ isActive, setActive }}>
        {children}
      </ItemContext.Provider>
    </div>
  )
}

export function Question({ children }) {
  const { isActive, setActive } = useContext(ItemContext)
  return (
    <div className={styles.questionBox} onClick={() => setActive(!isActive)}>
      <p>{children}</p>
      <PlusIcon />
    </div>
  )
}

export function Answer({ children }) {
  return (
    <div className={styles.answerBox}>
      <p>{children}</p>
    </div>
  )
}

function PlusIcon() {
  const { isActive } = useContext(ItemContext)
  const Icon = isActive ? Minus : Plus
  return (
    <div className={styles.iconBox}>
      <Icon className={styles.icon} />
    </div>
  )
}

const ItemContext = createContext()
