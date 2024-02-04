import Map from './Map'
import { Title, MapBox } from './components'

import styles from './styles/ContainersMap.module.scss'

export default function ContainersMap() {
  return (
    <div className={styles.module}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <Title>География наших контейнеров</Title>

          <MapBox>
            <Map />
          </MapBox>
        </div>
      </div>
    </div>
  )
}
export { ContainersMap }
