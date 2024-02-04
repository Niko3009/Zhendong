'use client'

import { useState } from 'react'
import CardModal from './CardModal'
import { LocationTable, InfoTable, ArrowIcon } from './components'

import styles from './styles/ListCard.module.scss'

export default function ListCard({ cardData }) {
  const [isModalOpen, setModalOpen] = useState(false)
  const chooseCard = () => setModalOpen(true)

  return (
    <>
      <div className={styles.itemBox} onClick={() => chooseCard()}>
        <LocationTable locations={cardData?.locations} />
        <InfoTable info={cardData?.info} />
        <ArrowIcon />
      </div>

      <CardModal {...{ isModalOpen, setModalOpen, cardData }} />
    </>
  )
}
export { ListCard }
