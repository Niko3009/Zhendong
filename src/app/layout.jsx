import Header from '@/modules/Header'
import Footer from '@/modules/Footer'
import Scrollbox from '@/containers/ScrollBox'
import GothamPro from '@/global/fonts/GothamPro'

import StoreProvider from '@/store/Provider'

import '@/global/styles.scss'
import styles from './layout.module.scss'

export const metadata = {
  title: 'Zhendong Traiding House',
  description: 'App for Zhendong',
}

export default function ({ children }) {
  return (
    <html lang="en" className={GothamPro.variable}>
      <body>
        <StoreProvider>
          <div id={'global-layout'} className={styles.layout}>
            <Header />
            <Scrollbox isVerticalScrolling={true} className={styles.scrolled}>
              <main className={styles.main}>{children}</main>
              <Footer />
            </Scrollbox>
          </div>
        </StoreProvider>
      </body>
    </html>
  )
}
