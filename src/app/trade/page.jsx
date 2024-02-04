'use client'

import { AnimationObserver } from '@/containers/Animation'
import Pattern from '@/modules/main/patterns/SmallPattern/SmallPattern'
import Heading from '@/main/Heading'
import Request from '@/main/Request'
import ContainersTrade from '@/main/ContainersTrade'

import mock from '@/backend/pages/trade'
import { useGetPageDataQuery as useDataQuery } from '@/store/api'

export default function () {
  const response = useDataQuery({ path: ['catalog'] })
  const {
    data,
    // currentData, isLoading, error
  } = response
  console.log(data)
  const { modules } = mock.data

  const { heading, ['catalog']: catalog, ['request-form']: request } = modules

  return (
    <>
      <AnimationObserver isDisable={true}>
        <Pattern />
        <Heading pageData={heading.data} />
        <ContainersTrade pageData={catalog.data} />
        <Request pageData={request.data} />
      </AnimationObserver>
    </>
  )
}
