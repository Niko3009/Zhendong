import LinkArrow from '@/shared/icons/Arrow'

import styles from './styles/ListCard.module.scss'

export function LocationTable({ locations }) {
  const departurePoint = locations?.departure
  const arrivalPoint = locations?.arrival
  return (
    <div className={styles.locationsBox}>
      <div className={styles.departurePointBox}>
        <p className={styles.pointTitle}>Локация выдачи</p>
        <p className={styles.point}>{departurePoint}</p>
      </div>
      <div className={styles.arrivalPointBox}>
        <p className={styles.pointTitle}>Локация сдачи</p>
        <p className={styles.point}>{arrivalPoint}</p>
      </div>
    </div>
  )
}

export function InfoTable({ info }) {
  const cnt20DC = info?.['20DC']
  const cnt40HC = info?.['40HC']

  return (
    <div className={styles.infoTableBox}>
      <div className={styles.infoTableTitles}>
        <p>Тип контейнера</p>
        <p>Стоимость</p>
        <p>Условия</p>
        <p>В наличии</p>
      </div>

      <div className={styles.infoTableRow}>
        <p>20DC</p>
        <p>{cnt20DC?.cost}</p>
        <p>{cnt20DC?.conditions}</p>
        <p>{cnt20DC?.available}</p>
      </div>

      <div className={styles.infoTableRow}>
        <p>40HC</p>
        <p>{cnt40HC?.cost}</p>
        <p>{cnt40HC?.conditions}</p>
        <p>{cnt40HC?.available}</p>
      </div>
    </div>
  )
}

export function ArrowIcon() {
  return (
    <div className={styles.arrowBox}>
      <div className={styles.iconBox}>
        <LinkArrow styleClass={'blue'} />
      </div>
    </div>
  )
}
