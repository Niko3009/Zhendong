'use client'

import { useState, useEffect } from 'react'
import useMediaQuery from '@/hooks/useMediaQuery'

import Modal from '@/modules/Modal'
import Button from '@/ui/Button'
import FiltersPanel from './FiltersPanel'
import ListCard from './ListCard'
import { Icon, TradeModeButton, FiltersPanelButton } from './components'

import styles from './styles/ContainersTrade.module.scss'

import data from './data.json'

export default function ContainersTrade() {
  const [tradeMode, setTradeMode] = useState('rent')
  const updateTradeMode = (mode) => setTradeMode(mode)

  const [filtersSettings, setFiltersSettings] = useState({})
  const updateFiltersSettings = (settings) => setFiltersSettings(settings)

  const settings = { tradeMode, filtersSettings }
  const control = {
    ...{ tradeMode, updateTradeMode },
    ...{ filtersSettings, updateFiltersSettings },
  }

  // console.log(settings)

  return (
    <div className={styles.module}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <ControlPanel {...{ control }} />
          <List {...{ settings }} />
        </div>
      </div>
    </div>
  )
}
export { ContainersTrade }

export function List() {
  const { list } = data
  return (
    <div className={styles.listBox}>
      <div className={styles.cardsBox}>
        {list.map((cardData, i) => (
          <ListCard key={i} cardData={cardData} />
        ))}
      </div>

      <Button styleClass={'grey'}>Показать ещё 20 маршрутов</Button>
    </div>
  )
}

export function ControlPanel({ control }) {
  const { filtersSettings, updateFiltersSettings } = control
  const { tradeMode, updateTradeMode } = control

  const isActiveMode = (mode) => mode === tradeMode
  const tradeModeControl = { isActiveMode, updateTradeMode }
  const filtersSettingsControl = { filtersSettings, updateFiltersSettings }

  return (
    <div className={styles.controlPanelBox}>
      <div className={styles.tradeModeButtons}>
        <TradeModeButton name="rent" control={tradeModeControl}>
          Аренда
        </TradeModeButton>
        <TradeModeButton name="sale" control={tradeModeControl}>
          Продажа
        </TradeModeButton>
      </div>

      <FiltersControlPanel {...{ filtersSettingsControl }} />

      <Button styleClass={'grey'}>
        <Icon src={'/svg/special/map.svg'} />
        На карте
      </Button>

      <Button styleClass={'grey'}>Выгрузить в Excel</Button>
    </div>
  )
}

export function FiltersControlPanel({ filtersSettingsControl }) {
  const [isModalOpen, setModalOpen] = useState(false)
  const isDesktopMode = useMediaQuery('desktop')

  useEffect(() => {
    if (isDesktopMode) setModalOpen(false)
  }, [isDesktopMode, setModalOpen])

  return (
    <div className={styles.filtersControl}>
      <div className={styles.desktopFiltersPanel}>
        <FiltersPanel
          control={{ ...filtersSettingsControl }}
          autoApprove={true}
        />
      </div>

      <div className={styles.filtersPanelButton}>
        <FiltersPanelButton {...{ setModalOpen }}>
          <Icon src={'/svg/special/filter.svg'} />
          Фильтр
        </FiltersPanelButton>
      </div>

      <FiltersPanelModal
        {...{ isModalOpen, setModalOpen, filtersSettingsControl }}
      />
    </div>
  )
}

export function FiltersPanelModal({
  isModalOpen,
  setModalOpen,
  filtersSettingsControl,
}) {
  const control = { ...filtersSettingsControl }
  return (
    <Modal {...{ isModalOpen, setModalOpen }}>
      <FiltersPanel control={control} />
    </Modal>
  )
}
