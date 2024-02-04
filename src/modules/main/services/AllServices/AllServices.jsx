import { AllServices, Service, Icon, Text } from './components'

import styles from './AllServices.module.scss'

import mock from '@/backend/modules/all-services'

export default function () {
  const { data } = mock
  const { list } = data
  return (
    <div className={styles.module}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <AllServices>
            {list.map((data, i) => (
              <Item {...{ data }} key={i + data.id} />
            ))}
          </AllServices>
        </div>
      </div>
    </div>
  )
}

export function Item({ data }) {
  const { id, name, img } = data
  const { src } = img
  return (
    <Service id={id}>
      <Icon src={src || '#'} />
      <Text>{name || 'Услуга'}</Text>
    </Service>
  )
}
