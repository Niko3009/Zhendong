import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'account',
  initialState: {},
  reducers: {
    setPlayTrack: (state, { payload }) => {
      state.track = payload.track
    },
    setTrackList: (state, { payload }) => {
      state.trackList = payload.tracks
    },
  },
})

export const { actions, reducer } = slice
export default reducer

export const { setPlayTrack, setTrackList, clearAccount } = actions
