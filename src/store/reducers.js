import api from './api'

// import account from 'back/slices/account'
// import user from 'back/slices/user'

export const reducers = {
  [api.reducerPath]: api.reducer,
  //   account,
  //   user,
}
export default reducers
