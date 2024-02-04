'use client'

import classNames from 'classnames'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import routes from '@/global/routes'
import useRedirect from '@/hooks/useRedirect'
import MenuIcon from '@/shared/icons/Menu'
import CrossIcon from '@/shared/icons/Cross'
import Button from '@/ui/Button'
import Pattern from './Pattern'

import styles from './styles/Header.module.scss'

export default function DroppedNav() {
  const [isActive, setActive] = useState(false)
  const Icon = isActive ? CrossIcon : MenuIcon

  return (
    <div className={styles.droppedNav}>
      <div className={styles.iconBox} onClick={() => setActive(!isActive)}>
        <Icon className={styles.icon} />
      </div>

      <DropDownWindow {...{ isActive, setActive }} />
    </div>
  )
}
export { DroppedNav }

function DropDownWindow({ isActive, setActive }) {
  const redirectTo = useRedirect()
  const path = usePathname()

  const redirect = (href) => {
    setActive(false)
    redirectTo(href)
  }

  useEffect(() => {
    setActive(false)
  }, [path, setActive])

  return (
    <div
      className={classNames(styles.droppedWindow, {
        [styles.inactive]: !isActive,
      })}
    >
      <div className={styles.buttonBox}>
        <Button styleClass={'white'} onClick={() => redirect(routes.services)}>
          Услуги
        </Button>

        <Button styleClass={'white'} onClick={() => redirect(routes.about)}>
          Почему мы
        </Button>

        <Button styleClass={'white'} onClick={() => redirect(routes.contacts)}>
          Контакты
        </Button>

        <div>
          <Button styleClass={'red'} onClick={() => redirect(routes.trade)}>
            Контейнеры
          </Button>

          <Button
            styleClass={'blue'}
            onClick={() => redirect(routes.vacancies)}
          >
            Связаться с нами
          </Button>
        </div>
      </div>

      <Pattern />
    </div>
  )
}
