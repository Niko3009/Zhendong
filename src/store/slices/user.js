import { createSlice } from '@reduxjs/toolkit'

export const initialState = { token: null, data: null, id: null }

export const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    globalSetUser: (state, { payload: { token, data, id } }) => {
      state.token = token
      state.data = data
      state.id = id
    },

    globalSetUserToken: (state, { payload: { token } }) => {
      state.token = token
    },

    globalClearUser: (state) => {
      Object.keys(state).forEach((N) => (state[N] = initialState[N]))
    },
  },
})

export const { actions, reducer } = slice
export default reducer

export const { globalSetUser, globalClearUser, globalSetUserToken } = actions
