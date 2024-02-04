import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { HYDRATE } from 'next-redux-wrapper'

import { DOMAIN, PATH } from '@/global/data/api'

export const api = createApi({
  reducerPath: 'zhendong',

  baseQuery: fetchBaseQuery({ baseUrl: DOMAIN }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) return action.payload[reducerPath]
  },

  tagTypes: ['DATA'],
  endpoints: (builder) => ({
    getPageData: builder.query({
      query: ({ path }) => {
        const basePathString = PATH.page
        let pathString = basePathString
        if (typeof path === 'string') pathString += path
        if (Array.isArray(path)) for (const dir of path) pathString += `/${dir}`
        return pathString
      },
      providesTags: (result) =>
        getTags({ result, tagType: 'DATA', id: result?.name }),
    }),

    postCallback: builder.mutation({
      query: ({ data }) => ({ url: PATH.callback, method: 'POST', body: data }),
    }),
  }),
})

export default api
export const { reducerPath, reducer, middleware, endpoints } = api

export const { useGetPageDataQuery, usePostCallbackMutation } = api
export const { getPageData } = endpoints

export function getTags({ result, tagType, id }) {
  return result
    ? [{ type: tagType, id }, { type: tagType }]
    : [{ type: tagType }]
  // return [{ type: tagType }]
  // providesTags: [tag],
  // providesTags: (result = []) => [
  //   ...result.map(({ id }) => ({ type: FAVORS_TAG.type, id })),
  //   FAVORS_TAG,
  // ],
}
