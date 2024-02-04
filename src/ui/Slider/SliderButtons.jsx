import classNames from 'classnames'
import {
  IoIosArrowBack as ArrowBack,
  IoIosArrowForward as ArrowForward,
} from 'react-icons/io'

import styles from './styles/SliderButtons.module.scss'

export default function SliderButtons({
  slider,
  isDesktopPaginationEnable,
  className,
}) {
  return (
    <div
      className={classNames(styles.wrapper, {
        [styles.disable]: !isDesktopPaginationEnable,
        [className]: !!className,
      })}
    >
      <div
        onClick={() => slider?.slidePrev()}
        className={classNames(styles['slider-button'], {
          [styles.inactive]: slider?.isBeginning,
        })}
      >
        <ArrowBack className={classNames(styles.arrow)} />
      </div>

      <div
        onClick={() => slider?.slideNext()}
        className={classNames(styles['slider-button'], {
          [styles.inactive]: slider?.isEnd,
        })}
      >
        <ArrowForward className={classNames(styles.arrow)} />
      </div>
    </div>
  )
}
export { SliderButtons }
