import { useState, useEffect } from 'react'
import Modal from '@/modules/Modal'
import Input from '@/ui/Input'
import Button from '@/ui/Button'
import Cover, { hidingDuration } from '@/containers/Cover'
import useMediaQuery from '@/hooks/useMediaQuery'

import styles from './styles/CardModal.module.scss'

export default function CardModal({ isModalOpen, setModalOpen, cardData }) {
  const [window, setWindow] = useState('form')
  const isTabletMode = useMediaQuery('tablet')

  const windows = ['card', 'form', 'success', 'fail']
  const initWindow = isTabletMode ? 'form' : 'card'

  const isWindow = (name) => window === name
  const openWindow = (name) => setWindow(name)
  const closeWindow = () => setModalOpen(false)
  const windowControl = { window, windows, isWindow, openWindow, closeWindow }

  useEffect(() => {
    const modalResetDelay = hidingDuration.match(/(\d+)/)[0]
    if (!isModalOpen) setTimeout(() => openWindow(initWindow), modalResetDelay)
  }, [isModalOpen, openWindow, initWindow])

  return (
    <Modal
      {...{ isModalOpen, setModalOpen }}
      type={isTabletMode ? 'window' : 'swipe'}
    >
      <div className={styles.modalContent}>
        <Cover isHidden={!isWindow('card')}>
          <Card {...{ windowControl, cardData }} />
        </Cover>

        <Cover isHidden={!isWindow('form')}>
          <Form {...{ windowControl }} />
        </Cover>

        <Cover isHidden={!isWindow('success')}>
          <Success {...{ windowControl }} />
        </Cover>

        <Cover isHidden={!isWindow('fail')}>
          <Fail {...{ windowControl }} />
        </Cover>
      </div>
    </Modal>
  )
}
export { CardModal }

function Form({ windowControl }) {
  const { openWindow } = windowControl
  const submitForm = () => openWindow('success')
  return (
    <div className={styles.contactsBox}>
      <h1>Заявка на аренду</h1>
      <div className={styles.inputs}>
        <Input placeholder={'Имя'} styleClass={'grey'} />
        <Input placeholder={'Телефон'} styleClass={'grey'} error={true} />
        <Input placeholder={'E-mail'} styleClass={'grey'} />
        <Button styleClass={'blue'} onClick={submitForm}>
          Отправить
        </Button>
      </div>
      <h5>
        Нажимая «Отправить», вы соглашаетесь на{' '}
        <span>обработку персональных данных</span>
      </h5>
    </div>
  )
}

function Success({ windowControl }) {
  // const { closeWindow } = windowControl
  const { openWindow } = windowControl
  return (
    <div className={styles.messageBox}>
      <div className={styles.message}>
        <h1>Заявка успешно отправлена!</h1>
        <p>
          Спасибо, что оставили заявку. Наши специалисты свяжутся с вами в
          ближайшее время
        </p>
      </div>

      <Button styleClass={'blue'} onClick={() => openWindow('fail')}>
        Готово
      </Button>
    </div>
  )
}

function Fail({ windowControl }) {
  const { openWindow } = windowControl
  const openForm = () => openWindow('form')
  return (
    <div className={styles.messageBox}>
      <div className={styles.message}>
        <h1>Что-то пошло не так</h1>
        <p>
          Не получилось отправить вашу заявку. Пожалуйста, попробуйте отправить
          её ещё раз
        </p>
      </div>

      <Button styleClass={'blue'} onClick={openForm}>
        Попробовать ещё раз
      </Button>
    </div>
  )
}

function Card({ windowControl, cardData }) {
  const { openWindow } = windowControl
  const openForm = () => openWindow('form')

  const info = cardData?.info
  const locations = cardData?.locations
  const departurePoint = locations?.departure
  const arrivalPoint = locations?.arrival
  const cnt20DC = info?.['20DC']
  const cnt40HC = info?.['40HC']

  return (
    <div className={styles.cardBox}>
      <div className={styles.cardDataBox}>
        <div className={styles.locationsBox}>
          <div className={styles.tableRow}>
            <p className={styles.title}>Локация выдачи</p>
            <p className={styles.data}>{departurePoint}</p>
          </div>

          <div className={styles.tableRow}>
            <p className={styles.title}>Локация сдачи</p>
            <p className={styles.data}>{arrivalPoint}</p>
          </div>
        </div>

        <div className={styles.tableRow}>
          <p className={styles.title}>Тип контейнера</p>
          <div className={styles.dataRow}>
            <p className={styles.data}>{'20DC'}</p>
            <p className={styles.data}>{'40HC'}</p>
          </div>
        </div>

        <div className={styles.tableRow}>
          <p className={styles.title}>Стоимость</p>
          <div className={styles.dataRow}>
            <p className={styles.data}>{cnt20DC?.cost}</p>
            <p className={styles.data}>{cnt40HC?.cost}</p>
          </div>
        </div>

        <div className={styles.tableRow}>
          <p className={styles.title}>Условия</p>
          <div className={styles.dataRow}>
            <p className={styles.data}>{cnt20DC?.conditions}</p>
            <p className={styles.data}>{cnt40HC?.conditions}</p>
          </div>
        </div>

        <div className={styles.tableRow}>
          <p className={styles.title}>В наличии</p>
          <div className={styles.dataRow}>
            <p className={styles.data}>{cnt20DC?.available}</p>
            <p className={styles.data}>{cnt40HC?.available}</p>
          </div>
        </div>
      </div>

      <Button styleClass={'blue'} onClick={openForm}>
        Оставить заявку
      </Button>
    </div>
  )
}
