import React, { createContext, useCallback, useContext, useState } from 'react'

import { AmountType } from '../../types/transactions'

const initialData = {
  total: 0,
  deposit: 0,
  withdraw: 0,
}

type contextType = {
  state: AmountType
  setAmount: (amount: AmountType) => void
}

const Context = createContext({} as contextType)

interface Props {
  children: React.ReactNode
}

export const AmountContextProvider = ({ children }: Props) => {
  const [state, setState] = useState<AmountType>(initialData)

  const setAmount = useCallback((amount: AmountType) => {
    setState(amount)
  }, [])

  return (
    <Context.Provider
      value={{
        state,
        setAmount,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useAmount = () => {
  const context = useContext(Context)

  if (!context) {
    throw new Error('useAmount must be used within a AmountContextProvider')
  }

  return {
    state: context.state,
    setAmount: context.setAmount,
  }
}
