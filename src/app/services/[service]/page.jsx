'use client'

import { AnimationObserver } from '@/containers/Animation'
import Pattern from '@/modules/main/patterns/SmallPattern/SmallPattern'
import Heading from '@/main/Heading'
import PhotoLine from '@/main/PhotoLine'
import Request from '@/main/Request'
import AboutService from '@/main/AboutService'
import FAQ from '@/main/FAQ'

import mock from '@/backend/pages/services/slug'
import { useGetPageDataQuery as useDataQuery } from '@/store/api'

export default function ({ params }) {
  const { service } = params

  const response = useDataQuery({ path: ['services', service] })
  const {
    data,
    // currentData, isLoading, error
  } = response
  console.log(data)
  const { modules } = mock.data

  const {
    heading,
    ['photo-line']: photo,
    ['about-service']: about,
    ['request-form']: request,
    ['faq']: faq,
  } = modules

  return (
    <>
      <AnimationObserver isDisable={true}>
        <Pattern />
        <Heading pageData={heading.data} />
        <PhotoLine pageData={photo.data} />
        <AboutService pageData={about.data} />
        <Request pageData={request.data} />
        <FAQ pageData={faq.data} />
      </AnimationObserver>
    </>
  )
}
