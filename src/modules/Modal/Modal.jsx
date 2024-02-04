'use client'

import Modal from 'react-modal'
import classNames from 'classnames'
import useMediaQuery from '@/hooks/useMediaQuery'

import WindowModal from './WindowModal'
import SwipeModal from './SwipeModal'
import VideoModal from './VideoModal'
import { ContentPlug } from './components'

import styles from './styles/Modal.module.scss'

export default function CustomModal({
  children,
  isModalOpen,
  setModalOpen,
  type = 'default',
}) {
  const isDesktopMode = useMediaQuery('desktop')
  const DefaultModal = isDesktopMode ? WindowModal : SwipeModal
  const availableModals = {
    default: DefaultModal,
    window: WindowModal,
    swipe: SwipeModal,
    video: VideoModal,
  }

  const closeModal = () => setModalOpen(false)
  const isAvailable = !!availableModals[type]
  const ModalComponent = availableModals[isAvailable ? type : 'window']

  return (
    <Modal
      // id={'active-modal'}
      className={styles.modal}
      overlayClassName={classNames(styles.overlay, {
        [styles.hidden]: !isModalOpen,
      })}
      contentClassName={styles.window}
      //
      isOpen={
        true
        // isModalOpen
      }
      onRequestClose={closeModal}
      //
      ariaHideApp={false}
      close
    >
      <ModalComponent {...{ closeModal }}>
        {children ? children : <ContentPlug />}
      </ModalComponent>
    </Modal>
  )
}
export { CustomModal as Modal }
