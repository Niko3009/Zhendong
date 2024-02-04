'use client'

import { AnimationObserver } from '@/containers/Animation'
import Pattern from '@/modules/main/patterns/SmallPattern/SmallPattern'
import Heading from '@/main/Heading'
import Map from '@/main/ContactsMap'
import Banner from '@/modules/main/banners/RequisitesBanner'

import mock from '@/backend/pages/contacts'
import { useGetPageDataQuery as useDataQuery } from '@/store/api'

export default function () {
  const response = useDataQuery({ path: ['contacts'] })
  const {
    data,
    // currentData, isLoading, error
  } = response
  console.log(data)
  const { modules } = mock.data

  const {
    heading,
    ['contacts-map']: map,
    ['banner-requisites']: banner,
  } = modules

  return (
    <>
      <AnimationObserver isDisable={true}>
        <Pattern />
        <Heading pageData={heading.data} />
        <Map pageData={map.data} />
        <Banner pageData={banner.data} />
      </AnimationObserver>
    </>
  )
}
