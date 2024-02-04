'use client'

import Button from '@/ui/Button'
import routes from '@/global/routes'
import { useRedirect } from '@/hooks/useRedirect'

import styles from './styles/Header.module.scss'

export default function () {
  const redirect = useRedirect()
  return (
    <div className={styles.fixedNav}>
      <div>
        <Button
          styleClass={'header-white'}
          onClick={() => redirect(routes.services)}
        >
          Услуги
        </Button>

        <Button
          styleClass={'header-white'}
          onClick={() => redirect(routes.about)}
        >
          Почему мы
        </Button>

        <Button
          styleClass={'header-white'}
          onClick={() => redirect(routes.contacts)}
        >
          Контакты
        </Button>
      </div>

      <div>
        <Button styleClass={'red'} onClick={() => redirect(routes.trade)}>
          Контейнеры
        </Button>
      </div>

      <div>
        <Button styleClass={'blue'} onClick={() => redirect(routes.vacancies)}>
          Связаться с нами
        </Button>
      </div>
    </div>
  )
}
