'use client'

import { AnimationObserver } from '@/containers/Animation'
import Pattern from '@/modules/main/patterns/SmallPattern/SmallPattern'
import Heading from '@/main/Heading'
import Info from '@/modules/main/CompanyInfo'
import History from '@/main/History'
import Reasons from '@/main/Reasons'
import Achievements from '@/main/Achievements'
import Events from '@/main/CompanyEvents'
import Vacancy from '@/modules/main/vacancies/ProposedVacancies'

import mock from '@/backend/pages/about'
import { useGetPageDataQuery as useDataQuery } from '@/store/api'

export default function () {
  const response = useDataQuery({ path: ['about'] })
  const {
    data,
    // currentData, isLoading, error
  } = response
  console.log(data)
  const { modules } = mock.data

  const {
    heading,
    ['company-info']: info,
    ['company-history']: history,
    ['reasons']: reasons,
    ['achievements']: achievements,
    ['company-events']: events,
    ['proposed-vacancies']: vacancy,
  } = modules

  return (
    <>
      <AnimationObserver isDisable={true}>
        <Pattern />
        <Heading pageData={heading.data} />
        <Info pageData={info.data} />
        <History pageData={history.data} />
        <Reasons pageData={reasons.data} />
        <Achievements pageData={achievements.data} />
        <Events pageData={events.data} />
        <Vacancy pageData={vacancy.data} />
      </AnimationObserver>
    </>
  )
}
