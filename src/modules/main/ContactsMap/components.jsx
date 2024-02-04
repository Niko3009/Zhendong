'use client'

import { createContext, useContext, useState } from 'react'
import Image from 'next/image'
import classNames from 'classnames'
import Plus from '@/shared/icons/Plus'
import Minus from '@/shared/icons/Minus'

import styles from './ContactsMap.module.scss'

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

export function Address({ children }) {
  const { isActive, setActive } = useContext(ItemContext)
  return (
    <div className={styles.officeBox} onClick={() => setActive(!isActive)}>
      <div className={styles.office}>{children}</div>
      <PlusIcon />
    </div>
  )
}

export function Phone({ children }) {
  return <div className={styles.phoneBox}>{children}</div>
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

export function Map() {
  return (
    <div className={styles.mapBox}>
      <div className={styles.imgBox}>
        <Image
          src={'/img/map-2.jpg'}
          fill
          priority
          style={{ objectFit: 'cover' }}
          alt={'ContactsMap'}
        />
      </div>
    </div>
  )
}

const ItemContext = createContext()
