'use client'

import Pattern from '@/modules/main/patterns/SmallPattern/SmallPattern'
import Text from '@/main/Text'

import mock from '@/backend/pages/article/slug'
import { useGetPageDataQuery as useDataQuery } from '@/store/api'

export default function () {
  const response = useDataQuery({ path: ['article'] })
  const {
    data,
    // currentData, isLoading, error
  } = response
  console.log(data)
  const { modules } = mock.data

  const { ['text']: text } = modules

  return (
    <>
      <Pattern />
      <Text pageData={text.data} />
    </>
  )
}
