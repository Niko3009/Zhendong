import { Career, Button } from './components'

import styles from './AllVacancies.module.scss'

import mock from '@/backend/modules/all-vacancies'

export default function VacanciesList() {
  const { data } = mock
  const { list } = data

  return (
    <div className={styles.module}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
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
          <Button>Показать ещё</Button>
        </div>
      </div>
    </div>
  )
}
