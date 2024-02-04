import { AllServices, Service, Button, Icon, Text } from './components'
import BG from './BG'

import styles from './ProposedServices.module.scss'

import mock from '@/backend/modules/proposed-services'

export default function ProposedServices() {
  const { data } = mock
  const { list } = data
  return (
    <div className={styles.module}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h2>Услуги</h2>
          <AllServices>
            {list.map((data, i) => (
              <Item {...{ data }} key={i + data.id} />
            ))}

            <Button>Все услуги</Button>
          </AllServices>
        </div>

        <BG />
      </div>
    </div>
  )
}
export { ProposedServices }

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
