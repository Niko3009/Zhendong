import classNames from 'classnames'
import Input from '@/ui/Input/FiltersInput'
import Button from '@/ui/Button'
import Dropdown from '@/ui/Dropdown'
import SliderBar from '@/ui/SliderBar'

import { handleCostInputValue } from './funcs/handleCostInputValue'

import styles from './styles/FiltersPanel.module.scss'

export function Section({ title, className, children }) {
  return (
    <div className={classNames({ [className]: className })}>
      {title && <p>{title}</p>}
      {children}
    </div>
  )
}

export function LocationSelect({ name, placeholder, children }) {
  return (
    <Dropdown name={name} placeholder={placeholder}>
      {children}
    </Dropdown>
  )
}

export function LocationItem({ data, locationControl, type }) {
  const { setLocation } = locationControl
  return (
    <div name={data} className={styles.locationItem}>
      <input
        type="checkbox"
        name={data}
        onClick={(event) => setLocation(event.target, type)}
      />
      <p className={styles.location}>{data}</p>
      <p>{77}</p>
    </div>
  )
}

export function ContainerTypeButton({ children, name, containerControl }) {
  const { container, setСontainer } = containerControl
  return (
    <Button
      onClick={() => setСontainer(name)}
      className={styles.contTypeButton}
      styleClass={container === name ? 'blue' : 'grey'}
      checkboxButton={true}
    >
      {children}
    </Button>
  )
}

export function CostInput({ name, placeholder, costControl }) {
  const { cost, setCost } = costControl
  const value = cost[name]

  const updateValue = (newInputValue) => {
    const newValue = handleCostInputValue(newInputValue, value)
    if (!isNaN(newValue)) {
      cost[name] = newValue
      setCost(cost)
    }
  }

  return (
    <Input
      {...{ name, placeholder }}
      styleClass={'white'}
      value={value > 0 ? `${value}$` : ''}
      onChange={({ target }) => updateValue(target.value)}
    />
  )
}

export function CostSliderBar({ costControl, costMin, costMax }) {
  const { cost, setCost } = costControl

  const updateCost = (newValue) => {
    const newCost = { ...cost }
    newCost.from = newValue[0]
    newCost.to = newValue[1]
    setCost(newCost)
  }
  return (
    <div className={styles['cost-slider-box']}>
      <SliderBar
        className={styles['56']}
        value={[cost.from, cost.to]}
        onChange={({ target }) => updateCost(target.value)}
        min={costMin}
        max={costMax}
      />
    </div>
  )
}
