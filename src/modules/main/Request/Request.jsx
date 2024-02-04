'use client'

import Form from './Form'
import Pattern from './Pattern'
import { Title } from './components'

import styles, { wrapper } from './styles/Request.module.scss'

import mock from '@/backend/modules/request-form'

export default function Request({ pageData = {}, isExtended = false }) {
  const { data: moduleData } = mock

  const title = pageData.title || moduleData.title
  const description = pageData.description || moduleData.description
  const { ['success-logo']: successLogo, ['services-tabs']: allServices } =
    moduleData

  return (
    <div className={styles.module}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <Title>
            <h2>{title}</h2>
            <p>{description}</p>
          </Title>

          <Form {...{ isExtended, allServices, wrapper, successLogo }} />

          <Pattern />
        </div>
      </div>
    </div>
  )
}
export { Request }
