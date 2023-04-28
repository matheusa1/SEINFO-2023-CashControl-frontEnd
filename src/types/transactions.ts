export type GetTransactions = {
  search: string
  limit: number
  page: number
}

export type Transactions = {
  id: number
  description: string
  type: string
  price: number
  date: string
  category: string
  createdAt: string
}

export type DataTransactions = {
  count: number
  transactions: Transactions[]
}

export type AmountType = {
  total: number
  deposit: number
  withdraw: number
}

export type addTransactionsProps = {
  description: string
  type: boolean
  price: number
  category: string
}
