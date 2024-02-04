'use client'

import { AnimationObserver } from '@/containers/Animation'
import Pattern from '@/modules/main/patterns/SmallPattern/SmallPattern'
import Heading from '@/main/Heading'
import Services from '@/main/services/AllServices'
import RentBanner from '@/modules/main/banners/RentBanner'
import ProposalBanner from '@/modules/main/banners/ProposalBanner'
import Request from '@/main/Request'

import mock from '@/backend/pages/services'
import { useGetPageDataQuery as useDataQuery } from '@/store/api'

export default function () {
  const response = useDataQuery({ path: ['services'] })
  const {
    data,
    // currentData, isLoading, error
  } = response
  console.log(data)
  const { modules } = mock.data

  const {
    heading,
    ['all-services']: services,
    ['banner-rent']: rent,
    ['banner-proposal']: proposal,
    ['request-form']: request,
  } = modules

  return (
    <>
      <AnimationObserver isDisable={true}>
        <Pattern />
        <Heading pageData={heading.data} />
        <Services pageData={services.data} />
        <RentBanner pageData={rent.data} />
        <ProposalBanner pageData={proposal.data} />
        <Request pageData={request.data} isExtended={true} />
      </AnimationObserver>
    </>
  )
}
