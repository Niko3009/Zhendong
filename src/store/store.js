import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import middlewares from './middlewares'
import reducers from './reducers'

export const reducer = combineReducers(reducers)

export const middleware = (getMiddleware) =>
  getMiddleware({ serializableCheck: false }).concat(middlewares)

export const store = configureStore({ reducer, middleware })
export default store
