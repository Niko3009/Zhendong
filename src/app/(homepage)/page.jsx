'use client'

import { AnimationObserver } from '@/containers/Animation'
import Pattern from '@/modules/main/patterns/LargePattern/LargePattern'
import HeroSection from '@/main/HeroSection'
import Services from '@/main/services/ProposedServices'
import About from '@/modules/main/AboutCompany'
import Reasons from '@/main/Reasons'
import Achievements from '@/main/Achievements'
import Banner from '@/modules/main/banners/ProposalBanner'
import Request from '@/main/Request'

import mock from '@/backend/pages/homepage'
import { useGetPageDataQuery as useDataQuery } from '@/store/api'

export default function () {
  const response = useDataQuery({ path: ['home'] })
  const {
    data,
    // currentData, isLoading, error
  } = response
  console.log(data)
  const { modules } = mock.data

  const {
    ['hero-section']: hero,
    ['proposed-services']: services,
    ['about-company']: about,
    ['reasons']: reasons,
    ['achievements']: achievements,
    ['banner-proposal']: banner,
    ['request-form']: request,
  } = modules

  return (
    <>
      <AnimationObserver once={true}>
        <Pattern />
        <HeroSection pageData={hero.data} />
        <Services pageData={services.data} />
        <About pageData={about.data} />
        <Reasons pageData={reasons.data} />
        <Achievements pageData={achievements.data} />
        <Banner pageData={banner.data} />
        <Request pageData={request.data} isExtended={true} />
      </AnimationObserver>
    </>
  )
}
