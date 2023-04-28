import { GetTransactions, addTransactionsApi } from '@/services/api'
import { DataTransactions, addTransactionsProps } from '@/types/transactions'
import { createContext, useCallback, useContext, useState } from 'react'

type contextType = {
  transactions: DataTransactions
  addTransactions: (data: addTransactionsProps) => void
  getTransactionsAPI: (page?: number, limit?: number, search?: string) => void
}

const initialData = {
  count: 0,
  transactions: [],
}

const Context = createContext({} as contextType)

export const TransactionsContextProvider = ({ children }: any) => {
  const [transactions, setTransactions] =
    useState<DataTransactions>(initialData)

  const getTransactionsAPI = useCallback(
    async (page = 1, limit = 10, search = '') => {
      const response = await GetTransactions({
        page: page,
        limit: limit,
        search: search,
      })
      setTransactions(response)
    },
    [],
  )

  const addTransactions = useCallback(
    async (data: addTransactionsProps) => {
      const response = await addTransactionsApi(data)
      await getTransactionsAPI()
      return response
    },
    [getTransactionsAPI],
  )

  return (
    <Context.Provider
      value={{
        transactions,
        addTransactions,
        getTransactionsAPI: getTransactionsAPI,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useTransactions = () => {
  const context = useContext(Context)

  if (!context) {
    throw new Error(
      'useTransactions must be used within a TransactionsContextProvider',
    )
  }

  return {
    transactions: context.transactions,
    addTransactions: context.addTransactions,
    getTransactions: context.getTransactionsAPI,
  }
}
