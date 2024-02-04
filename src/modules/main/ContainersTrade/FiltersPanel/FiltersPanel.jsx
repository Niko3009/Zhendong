'use client'

import { useState, useEffect } from 'react'
import { Section, LocationSelect, LocationItem } from './components'
import { ContainerTypeButton, CostInput, CostSliderBar } from './components'
import Button from '@/ui/Button'

import updateFilters from './funcs/updateFilters'

import styles from './styles/FiltersPanel.module.scss'

import data from './data.json'

export default function FiltersPanel({ autoApprove = false, control }) {
  const { updateFiltersSettings } = control
  const approveFilters = () => updateFiltersSettings(filters)

  const { availableLocations, costMax, costMin } = data

  const initFilters = {
    locations: { from: [], to: [] },
    container: 'all',
    cost: { from: costMin, to: costMax },
  }

  const [filters, setFilters] = useState(initFilters)
  const filtersReset = () => setFilters(initFilters)
  const { locations, container, cost } = filters
  const filtersControl = { filters, setFilters }

  const setLocation = (item, type = 'from') => {
    const { name, checked } = item
    const arr = locations[type]
    if (checked) arr.push(name)
    else arr.splice(arr.indexOf(name), 1)
    updateFilters('locations', locations, filtersControl)
  }
  const locationControl = { locations, setLocation }

  const setСontainer = (newContType) => {
    updateFilters('container', newContType, filtersControl)
  }
  const containerControl = { container, setСontainer }

  const setCost = (newCost) => {
    for (let key in newCost) {
      if (newCost.from > newCost.to) newCost.from = newCost.to
      if (newCost[key] <= costMin) newCost[key] = costMin
      if (newCost[key] >= costMax) newCost[key] = costMax
    }
    updateFilters('cost', newCost, filtersControl)
  }
  const costControl = { cost, setCost }

  useEffect(() => {
    if (autoApprove) approveFilters()
  }, [filters])

  return (
    <div className={styles.filtersPanel}>
      <Section className={styles.modalTitle}>
        <h1>Фильтры</h1>
        <p className={styles.resetButton} onClick={() => filtersReset()}>
          Сбросить фильтры <span>×</span>
        </p>
      </Section>

      <Section className={styles.locationSelects}>
        <LocationSelect placeholder={'Локация выдачи'} name="from">
          {availableLocations.map((data, i) => (
            <LocationItem
              type={'from'}
              {...{ data, locationControl }}
              key={i}
            />
          ))}
        </LocationSelect>

        <LocationSelect placeholder={'Локация сдачи'} name="to">
          {availableLocations.map((data, i) => (
            <LocationItem type={'to'} {...{ data, locationControl }} key={i} />
          ))}
        </LocationSelect>
      </Section>

      <Section title="Тип контейнера" className={styles.contType}>
        <div className={styles.contTypeButtons}>
          <ContainerTypeButton name="all" {...{ containerControl }}>
            Все
          </ContainerTypeButton>

          <ContainerTypeButton name="20DC" {...{ containerControl }}>
            20DC
          </ContainerTypeButton>

          <ContainerTypeButton name="40HC" {...{ containerControl }}>
            40HC
          </ContainerTypeButton>
        </div>
      </Section>

      <Section title="Ставка" className={styles.cost}>
        <div className={styles.costInputsBox}>
          <CostInput name={'from'} placeholder={'от'} {...{ costControl }} />
          <CostInput name={'to'} placeholder={'до'} {...{ costControl }} />
        </div>
        <CostSliderBar {...{ costControl, costMin, costMax }} />
      </Section>

      <Button
        styleClass={'blue'}
        className={styles.confirmButton}
        onClick={() => approveFilters()}
      >
        Применить
      </Button>
    </div>
  )
}
