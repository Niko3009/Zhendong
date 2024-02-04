import { Item, Address, Phone, Map } from './components'

import styles from './ContactsMap.module.scss'

import mock from '@/backend/modules/contacts-map'

export default function ContactMap() {
  const { data } = mock
  const { list } = data
  return (
    <div className={styles.module}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <Map />
          <OfficesList {...{ list }} />
        </div>
      </div>
    </div>
  )
}
export { ContactMap }

function OfficesList({ list }) {
  return (
    <div className={styles.officesListBox}>
      {list.map((item, i) => (
        <Item initActive={!!item?.initActive} key={i}>
          <Address>
            <h3> {item.office.city} </h3>
            <h4> {item.office.address} </h4>
            <p> {item.office.worktime} </p>
          </Address>
          <Phone>
            <p> Телефоны</p>
            {item.phones.map((phone, i) => (
              <h4 key={i}> {phone}</h4>
            ))}
          </Phone>
        </Item>
      ))}
    </div>
  )
}
