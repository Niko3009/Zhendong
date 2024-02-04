'use client'

import { createContext } from 'react'

export function Provider({ Context, value, children }) {
  const ContextProvider = Context?.Provider
  return <ContextProvider value={value}>{children}</ContextProvider>
}

export const Context = createContext()
export default Context
