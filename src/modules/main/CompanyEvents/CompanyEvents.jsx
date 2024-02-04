import { Title, Slider, Slide } from './components'
import { BG } from './BG'

import styles from './styles/CompanyEvents.module.scss'

import mock from '@/backend/modules/company-events'

export default function CompanyEvents() {
  const { data } = mock

  const { slides } = data
  return (
    <div className={styles.module}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <Title>Участие в мероприятиях</Title>

          <Slider>
            {slides.map((data, i) => (
              <Slide data={data} key={i} />
            ))}
          </Slider>
        </div>

        <BG />
      </div>
    </div>
  )
}
export { CompanyEvents }
