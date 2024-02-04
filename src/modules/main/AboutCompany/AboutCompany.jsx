'use client'

import Image from 'next/image'
import Animation from '@/containers/Animation'
import routes from '@/global/routes'
import { useRedirect } from '@/hooks/useRedirect'
import Button from '@/ui/Button'
import Pattern from './Pattern'

import styles from './About.module.scss'

import mock from '@/backend/modules/about-company'

export default function About() {
  const { data } = mock
  const { ['text-1']: textN1, ['text-2']: textN2, img } = data
  const { src } = img

  const redirect = useRedirect()
  return (
    <div className={styles.module}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.titleBox}>
            <h2>О компании</h2>

            <div className={styles.upperText}>
              <Animation
                duration={1500}
                animation={'custom-fade-in-bottom'}
                anchorPlacement={'center-center'}
                anchor={`.${styles.titleBox}`}
              >
                <p>{textN1}</p>
              </Animation>
            </div>
          </div>

          <div className={styles.redBox}>
            <Animation
              duration={1500}
              animation={'custom-shutter-ver-bottom'}
              anchorPlacement={'center-center'}
              anchor={`.${styles.titleBox}`}
            >
              <div className={styles.redBoxLayout}>
                <Animation
                  duration={1500}
                  animation={'custom-fade-in-bottom'}
                  anchorPlacement={'center-center'}
                  anchor={`.${styles.titleBox}`}
                >
                  <div className={styles.middleText}>
                    <p>{textN2}</p>
                  </div>
                </Animation>
              </div>
            </Animation>
          </div>

          <div className={styles.photoBox}>
            <Animation
              duration={1500}
              animation={'custom-shutter-ver-bottom'}
              anchorPlacement={'center-center'}
              anchor={`.${styles.wrapper}`}
            >
              <div className={styles.photoBoxLayout}>
                <Pattern />

                <div className={styles.imgBox}>
                  <Image
                    src={src || '#'}
                    fill
                    priority
                    style={{ objectFit: 'cover' }}
                    alt={'about-company'}
                  />
                </div>
              </div>
            </Animation>
          </div>

          <div className={styles.buttonBox}>
            <Button styleClass={'white'} onClick={() => redirect(routes.about)}>
              Подробнее
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
export { About }
