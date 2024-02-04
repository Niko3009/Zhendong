'use client'

import { useState } from 'react'
import { useGetURL } from '@/hooks/useGetURL'
import Cover from '@/containers/Cover'
import Input from '@/ui/Input'
import {
  FormBox,
  FormContent,
  ServicesTabs,
  Tab,
  Contacts,
  SubmitButton,
  SuccessMessage,
} from './components'

import { postData } from './funcs'

export default function Form({
  isExtended,
  allServices = [],
  wrapper,
  successLogo,
}) {
  const [isSuccess, setSuccess] = useState(false)
  const currentPageURL = useGetURL()
  const pageName = 'services'

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [services, setServices] = useState([])

  const formData = { name, phone, email }
  if (isExtended) formData.services = services

  const backToForm = () => setSuccess(false)
  const submitForm = async () => {
    try {
      const response = await postData(formData, currentPageURL, pageName)
      console.log(response)
      setSuccess(true)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <FormBox {...{ wrapper }}>
      <Cover isHidden={isSuccess}>
        <FormContent>
          <Cover isHidden={!isExtended}>
            <ServicesTabs>
              {allServices.map((data, i) => (
                <Tab {...{ data, services, setServices }} key={i} />
              ))}
            </ServicesTabs>
          </Cover>

          <Contacts>
            <Input
              placeholder={'Имя'}
              value={name}
              onChange={({ target }) => setName(target.value)}
            />

            <Input
              placeholder={'Телефон'}
              value={phone}
              onChange={({ target }) => setPhone(target.value)}
              // error={true}
            />

            <Input
              placeholder={'E-mail'}
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />

            <SubmitButton onClick={() => submitForm()}>Отправить</SubmitButton>
          </Contacts>
        </FormContent>
      </Cover>

      <Cover isHidden={!isSuccess}>
        <SuccessMessage {...{ successLogo, backToForm }} />
      </Cover>
    </FormBox>
  )
}
export { Form }
