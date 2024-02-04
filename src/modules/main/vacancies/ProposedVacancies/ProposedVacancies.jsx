import { Career, Button } from './components'

import styles from './ProposedVacancies.module.scss'

import mock from '@/backend/modules/proposed-vacancies'

export default function () {
  const { data } = mock

  const { list } = data
  return (
    <div className={styles.module}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.titleBox}>
            <h2>В поиске самых лучших специалистов</h2>
          </div>
          <List {...{ list }} />
          <Button>Все вакансии</Button>
        </div>
      </div>
    </div>
  )
}

function List({ list }) {
  return (
    <div className={styles.listBox}>
      {list.map((item, i) => (
        <Career key={i}>
          <p className={styles.careerName}>{item.name}</p>
          <p className={styles.careerConditions}>
            {item.conditions.place} / {item.conditions.salary}
          </p>
        </Career>
      ))}
    </div>
  )
}
