'use client'

import { AnimationObserver } from '@/containers/Animation'
import Pattern from '@/modules/main/patterns/SmallPattern/SmallPattern'
import Heading from '@/main/Heading'
import Banner from '@/modules/main/banners/HeadHunterBanner'
import Advantages from '@/modules/main/JobAdvantages'
import Vacancies from '@/modules/main/vacancies/AllVacancies'

import mock from '@/backend/pages/vacancies'
import { useGetPageDataQuery as useDataQuery } from '@/store/api'

export default function () {
  const response = useDataQuery({ path: ['vacancies'] })
  const {
    data,
    // currentData, isLoading, error
  } = response
  console.log(data)
  const { modules } = mock.data

  const {
    heading,
    ['all-vacancies']: vacancies,
    ['job-advantages']: advantages,
    ['banner-hh']: banner,
  } = modules

  return (
    <>
      <AnimationObserver isDisable={true}>
        <Pattern />
        <Heading pageData={heading.data} />
        <Vacancies pageData={vacancies.data} />
        <Advantages pageData={advantages.data} />
        <Banner pageData={banner.data} />
      </AnimationObserver>
    </>
  )
}
